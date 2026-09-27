-- ============================================
-- The Rolling Oven — Push Subscriptions Table
-- Run this in Supabase SQL Editor (Dashboard → SQL)
-- ============================================

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  endpoint text NOT NULL UNIQUE,
  keys_p256dh text NOT NULL,
  keys_auth text NOT NULL,
  user_agent text DEFAULT '',
  subscribed_at timestamptz DEFAULT now(),
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Index for fast lookup of active subscriptions
CREATE INDEX IF NOT EXISTS idx_push_subs_active ON push_subscriptions (active) WHERE active = true;

-- Enable RLS (Row Level Security) but allow service role full access
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policy: Only service role can insert/update/select (no anon access)
CREATE POLICY "Service role full access" ON push_subscriptions
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- ============================================
-- Leads Table (for phone capture / abandoned cart recovery)
-- ============================================

CREATE TABLE IF NOT EXISTS leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  phone text UNIQUE,
  name text DEFAULT '',
  email text DEFAULT '',
  cart_snapshot jsonb DEFAULT '[]'::jsonb,
  cart_total numeric DEFAULT 0,
  captured_at timestamptz DEFAULT now(),
  converted boolean DEFAULT false,
  consent_sms boolean DEFAULT true,
  consent_whatsapp boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Index for unconverted leads (for follow-up campaigns)
CREATE INDEX IF NOT EXISTS idx_leads_unconverted ON leads (converted) WHERE converted = false;

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access" ON leads
  FOR ALL
  USING (true)
  WITH CHECK (true);
