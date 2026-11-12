import { Pool } from 'pg';

export const pool = new Pool({
  host: process.env.PGHOST ?? 'localhost',
  database: process.env.PGDATABASE ?? 'notes',
  user: process.env.PGUSER ?? 'notes_app',
  password: process.env.PGPASSWORD,
  max: 10,
});
