const express = require("express");
const cors = require("cors");
const flashcardsRoutes = require("./routes/flashcardsRoutes");

const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests
app.use("/api/flashcards", flashcardsRoutes);

module.exports = app;
