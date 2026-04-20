const booksService = require("../services/books.service");

exports.searchBooks = async (req, res) => {
  try {
    const query = req.query.q;

    const data = await booksService.searchBooks(query);

    res.json(data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Error fetching books"
    });
  }
};

exports.getBook = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await booksService.getBook(id);

    res.json(data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Error fetching book"
    });
  }
};