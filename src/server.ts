import express from 'express';
import { requireAdmin, findUserByEmail } from './auth';
import { getUserOrders } from './db';

const app = express();
app.use(express.json());

app.get('/admin/users', async (req, res) => {
  if (!requireAdmin(req)) {
    return res.status(403).json({ error: 'forbidden' });
  }
  const user = await findUserByEmail(String(req.query.email ?? ''));
  if (!user) return res.status(404).json({ error: 'not found' });
  return res.json(user);
});

app.get('/orders', async (req, res) => {
  const orders = await getUserOrders(String(req.query.email ?? ''));
  return res.json(orders);
});

app.listen(3000, () => console.log('fixture-notes-api listening on 3000'));
