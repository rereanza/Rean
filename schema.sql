-- Jalankan ini di Supabase → SQL Editor

CREATE TABLE IF NOT EXISTS testimonials (
  id         BIGSERIAL PRIMARY KEY,
  nama       TEXT        NOT NULL,
  initial    TEXT        NOT NULL,
  rating     INTEGER     NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  quote      TEXT        NOT NULL,
  approved   BOOLEAN     NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index biar load cepat
CREATE INDEX IF NOT EXISTS idx_testi_approved ON testimonials (approved, created_at DESC);

-- Row Level Security - user hanya bisa INSERT dan SELECT approved
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Siapapun bisa baca yang sudah approved
CREATE POLICY "read approved"
  ON testimonials FOR SELECT
  USING (approved = true);

-- Siapapun bisa submit testimoni baru
CREATE POLICY "insert anyone"
  ON testimonials FOR INSERT
  WITH CHECK (true);

-- Cara approve: di Supabase dashboard → Table Editor → testimonials
-- Set approved = true untuk testimoni yang mau ditampilin
