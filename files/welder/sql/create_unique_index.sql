CREATE UNIQUE INDEX idx_${table}_${column} ON ${table} 
    USING btree (${column} ASC NULLS LAST) TABLESPACE pg_default;