-- VIP account application submissions (see vip-application.html)
-- Target: PostgreSQL

CREATE TABLE IF NOT EXISTS vip_applications (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    has_account         BOOLEAN NOT NULL,
    account_number      TEXT,
    deposit_amount_range TEXT NOT NULL CHECK (
        deposit_amount_range IN (
            '$10,000 - $50,000',
            '$50,000 - $150,000',
            '$150,000 - $500,000',
            '$500,000+'
        )
    ),

    full_name           TEXT NOT NULL,
    email               TEXT NOT NULL,
    phone               TEXT NOT NULL,

    status              TEXT NOT NULL DEFAULT 'pending' CHECK (
        status IN ('pending', 'contacted', 'approved', 'rejected')
    ),

    created_at          TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT now(),

    -- account_number is only meaningful (and required) when the applicant
    -- says they already have an account
    CONSTRAINT vip_applications_account_number_consistency CHECK (
        (has_account = TRUE  AND account_number IS NOT NULL AND account_number <> '')
        OR
        (has_account = FALSE AND account_number IS NULL)
    )
);

CREATE INDEX IF NOT EXISTS idx_vip_applications_email      ON vip_applications (email);
CREATE INDEX IF NOT EXISTS idx_vip_applications_status     ON vip_applications (status);
CREATE INDEX IF NOT EXISTS idx_vip_applications_created_at ON vip_applications (created_at DESC);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_vip_applications_updated_at ON vip_applications;
CREATE TRIGGER trg_vip_applications_updated_at
    BEFORE UPDATE ON vip_applications
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_at();
