const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books.controller");

router.get("/search", booksController.searchBooks);
router.get("/:id", booksController.getBook);

module.exports = router;