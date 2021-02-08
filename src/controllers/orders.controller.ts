import { Request, Response } from 'express';
import { IOrder } from 'interfaces/order.interface';

import { startConnection } from '../database';

export const createOrder = async (req: Request, res: Response) => {

  let quantity: number = 0;
  const data: IOrder[] = req.body;

  data.map((d) => quantity = d.quantity + quantity)
  if (quantity < 1) return res.status(400).json({ message: 'minimun 1 car' })
  if (quantity > 10) return res.status(400).json({ message: 'maximum 10 car' })


  const conn = await startConnection();

  data.map(async (order) => await conn.query('INSERT INTO _order SET ?', [order]));

  return res.status(201).json({ message: 'Created order', data });
}

