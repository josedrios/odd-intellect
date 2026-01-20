import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

// Server Setup
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// Server listening
const PORT = 4000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on http://0.0.0.0:${PORT}`),
);
