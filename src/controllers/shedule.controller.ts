import { Request, Response } from 'express';

import { startConnection } from '../database';

export const getShedule = async (req: Request, res: Response) => {
  const conn: any = await startConnection();

  const getShedule = await conn.query(`SELECT * FROM shedule
                      WHERE day < 6 AND  
	                          hour >= 6 AND
                              hour <= 20 OR
                              (day = 6 AND 
                               hour >= 8 AND
                               hour < 12)`)

  return res.json(getShedule[0]);

}