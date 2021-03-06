CREATE TABLE ${table} (
    id BIGSERIAL PRIMARY KEY,
    ${field} CHARACTER VARYING(60) NOT NULL,
    active BOOLEAN DEFAULT true NOT NULL,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);