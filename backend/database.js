import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();

// Database Connection
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Database Query Function
export async function query(text, params) {
  const start = Date.now();
  const res = await db.query(text, params);
  const duration = ((Date.now() - start) / 1000).toFixed(2) + " seconds";
  console.log("executed query", { text, params, duration, rows: res.rowCount });
  // console.log(res.rows);
  return res;
}
