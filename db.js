import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgresql://postgres:hPKcwHMvwEKPPXSyFVJTyhgxdfKbuPqo@nozomi.proxy.rlwy.net:52315/railway",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL Database'))
  .catch(err => console.error(' Connection error:', err));

export default pool;
