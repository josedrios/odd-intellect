const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(express.json());
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server is running on port http://0.0.0.0:${PORT}`),
);
