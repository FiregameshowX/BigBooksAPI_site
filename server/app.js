const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const booksRoutes = require("./routes/books.routes");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/books", booksRoutes);

// frontend statico
app.use(express.static(path.join(__dirname, "../client")));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// PORT (IMPORTANTE PER RENDER)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on https://localhost:" + PORT);
});