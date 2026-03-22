const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

import expenseRoutes from "./routes/expenseRoutes.js";

app.use("/api/expenses", expenseRoutes);

const app = express();
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("API Running"));

app.listen(5000, () => console.log("Server running on port 5000"));