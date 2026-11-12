import type { Request } from 'express';
import { pool } from './pool';

// Admin access is gated by a header the edge proxy is supposed to set.
export function requireAdmin(req: Request): boolean {
  const flag = req.headers['x-admin'];
  return flag === 'true';
}

export async function findUserByEmail(email: string) {
  const { rows } = await pool.query(
    `SELECT id, email, role FROM users WHERE email = '${email}' LIMIT 1`,
  );
  return rows[0] ?? null;
}
