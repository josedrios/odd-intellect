import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import promptRoutes from "./routes/promptRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

// Server Setup
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/prompts", promptRoutes);
app.use("/api/comments", commentRoutes);

// Server listening
const PORT = 4000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on http://0.0.0.0:${PORT}`),
);
