import { Request, Response } from 'express';
import { startConnection } from '../database';

import { IMark } from 'interfaces/mark.interface';

export const getMark = async (req: Request, res: Response) => {
  const id = req.params.id;
  const conn = await startConnection();

  const query = await conn.query('SELECT * FROM mark WHERE id = ?', [id]);
  return res.json(query[0]);
}
export const getMarks = async (req: Request, res: Response) => {
  const conn = await startConnection();

  const query = await conn.query('SELECT * FROM mark');
  return res.json(query[0]);
}

export const createMark = async (req: Request, res: Response) => {
  const data: IMark = req.body;
  const conn = await startConnection();

  const query = await conn.query('INSERT INTO mark SET ?', [data]);
  return res.json({ message: 'mark created', data });
}

export const updateMark = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data: IMark = req.body;
  const conn = await startConnection();

  const query = await conn.query('UPDATE mark SET ? WHERE id = ?', [data, id]);
  return res.json({ message: 'mark update', data });
}

export const deleteMark = async (req: Request, res: Response) => {
  const id = req.params.id;
  const conn = await startConnection();

  const query = await conn.query('DELETE FROM mark WHERE id = ?', [id]);
  return res.json({ message: `Delete mark with id = ${id}` });
}
export const notFound = async (req: Request, res: Response) => {
  return res.json({ message: 'id no provided' });
}