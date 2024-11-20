const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const flashcardsRouter = require("./routes/flashcards");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/flashcards", flashcardsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
