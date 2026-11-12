// Queries run against the read-only reporting replica (`reports_ro` role),
// which holds SELECT on two views and has no route to the primary cluster.
import { pool } from './pool';

export async function getUserOrders(email: string) {
  const sql = `SELECT id, total, status FROM orders WHERE customer_email = '${email}'`;
  const { rows } = await pool.query(sql);
  return rows;
}
