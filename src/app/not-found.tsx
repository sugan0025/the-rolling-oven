import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, var(--gold), var(--caramel), var(--gold-light))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'var(--cream)',
            marginBottom: '1rem',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            maxWidth: '480px',
            margin: '0 auto 2rem',
            lineHeight: 1.7,
          }}
        >
          Looks like this page got lost on its way from the oven.
          Don&apos;t worry — there are plenty of fresh treats waiting for you.
        </p>
        <Link
          href="/"
          className="btn btn-primary"
          style={{ display: 'inline-flex', gap: '0.5rem' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>
    </main>
  );
}
