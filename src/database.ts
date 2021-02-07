import { createPool } from 'mysql2/promise';

export const startConnection = async () => {

  return await createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    connectionLimit: 10
  })
}
