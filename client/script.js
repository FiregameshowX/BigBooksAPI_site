async function searchBooks() {

  const query = document.getElementById("search").value;

  const res = await fetch(`/api/books/search?q=${query}`);

  const data = await res.json();

  const container = document.getElementById("results");

  container.innerHTML = "";

  data.forEach(book => {
    const div = document.createElement("div");
    div.innerHTML = book.title || "No title";
    container.appendChild(div);
  });
}