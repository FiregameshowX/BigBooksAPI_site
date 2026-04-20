const fetch = require("node-fetch");

const BASE_URL = "https://api.bigbookapi.com";

// API KEY (da .env o Render)
const API_KEY = process.env.API_KEY;

// SEARCH BOOKS
exports.searchBooks = async (query) => {

  const url = `${BASE_URL}/search-books?api-key=${API_KEY}&query=${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("BigBook API error: " + response.status);
  }

  return response.json();
};

// SINGLE BOOK
exports.getBook = async (id) => {

  const url = `${BASE_URL}/${id}?api-key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("BigBook API error: " + response.status);
  }

  return response.json();
};