const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Pool } = require("pg");

// Server Setup
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Database Query Test
pool.connect().then(async () => {
  const res = await pool.query("SELECT * FROM birds;");
  console.log(res.rows);
});

// Server listening
const PORT = 4000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on http://0.0.0.0:${PORT}`),
);
