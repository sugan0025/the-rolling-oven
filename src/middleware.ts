import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * =======================================================================
 * THE ROLLING OVEN — Edge Security & Bot Protection Middleware
 * Runs at the Edge before any page or API route executes (<5ms latency).
 * =======================================================================
 */

// 1. IP Blacklist (Add any rogue / spammer IPs here if ever needed)
const BANNED_IPS = new Set<string>([
  // e.g. '192.0.2.1',
]);

// 2. Known malicious vulnerability scanner & exploit user-agent signatures
const BLOCKED_USER_AGENTS = [
  'sqlmap',
  'nikto',
  'masscan',
  'zgrab',
  'nmap',
  'havij',
  'acunetix',
  'nessus',
  'w3af',
  'netsparker',
  'dirbuster',
  'gobuster',
  'fuzz',
];

// 3. Automated vulnerability probe URL patterns (PHP, WordPress, config exploits)
const BLOCKED_PATH_PATTERNS = [
  /\/wp-admin/i,
  /\/wp-login/i,
  /\/xmlrpc\.php/i,
  /\/\.env/i,
  /\/\.git/i,
  /\/phpmyadmin/i,
  /\/admin\.php/i,
  /\/cgi-bin\//i,
  /\/\.aws/i,
  /\/composer\.json/i,
  /\/package-lock\.json/i,
  /\/vendor\//i,
];

// Helper to safely extract client IP behind Vercel / Cloudflare reverse proxies
function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0].trim();
    if (firstIp) return firstIp;
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp && realIp.trim()) {
    return realIp.trim();
  }
  return '127.0.0.1';
}

export function middleware(req: NextRequest) {
  const ip = getClientIp(req);
  const pathname = req.nextUrl.pathname;
  const userAgent = (req.headers.get('user-agent') || '').toLowerCase();

  // -------------------------------------------------------------
  // RULE 1: IP Blacklist Check
  // -------------------------------------------------------------
  if (BANNED_IPS.has(ip)) {
    return new NextResponse('Access Denied: Your IP has been restricted by security policy.', {
      status: 403,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  // -------------------------------------------------------------
  // RULE 2: Block Automated Vulnerability Scanners (Path Probes)
  // -------------------------------------------------------------
  for (const pattern of BLOCKED_PATH_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse('Not Found', {
        status: 404,
        headers: { 'X-Bot-Action': 'probe-blocked' },
      });
    }
  }

  // -------------------------------------------------------------
  // RULE 3: Block Malicious User Agents on API Routes
  // -------------------------------------------------------------
  if (pathname.startsWith('/api/')) {
    for (const badUa of BLOCKED_USER_AGENTS) {
      if (userAgent.includes(badUa)) {
        return NextResponse.json(
          { error: 'Forbidden: Automated tool signature detected.' },
          { status: 403 }
        );
      }
    }

    // Origin verification for state-changing mutations
    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
      const origin = req.headers.get('origin');
      const host = req.headers.get('host');
      
      // If origin header is present, ensure it matches your host/domain
      if (origin && host) {
        try {
          const originHost = new URL(origin).host;
          // Allow current domain, localhost for development, and vercel previews
          const isAllowedOrigin =
            originHost === host ||
            originHost.endsWith('.vercel.app') ||
            originHost.includes('localhost') ||
            originHost.includes('127.0.0.1');

          if (!isAllowedOrigin) {
            return NextResponse.json(
              { error: 'Forbidden: Invalid cross-origin request.' },
              { status: 403 }
            );
          }
        } catch {
          return NextResponse.json(
            { error: 'Forbidden: Malformed origin header.' },
            { status: 403 }
          );
        }
      }
    }
  }

  // -------------------------------------------------------------
  // RULE 4: Allow Legitimate Traffic & Search Engines with Security Headers
  // -------------------------------------------------------------
  const response = NextResponse.next();
  response.headers.set('X-Edge-Protected-By', 'The-Rolling-Oven-Shield');
  return response;
}

// Configure matcher to skip static files, images, icons, and Next.js internal bundles
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images/ (public images)
     * - icons/ (public icons)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    '/((?!_next/static|_next/image|images|icons|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

