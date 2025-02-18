const books = [
  { title: "Dom Casmurro", author: "Machado de Assis", status: "Available" },
  { title: "1984", author: "George Orwell", status: "Borrowed" },
];

// Renderiza os livros na tabela
const renderBooks = () => {
  const bookTable = document.querySelector("#bookTable tbody");
  bookTable.innerHTML = ""; // Limpa a tabela antes de renderizar novamente

  books.forEach((book, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.status}</td>
      <td>
        <button onclick="toggleStatus(${index})">
          ${book.status === "Available" ? "Emprestar" : "Devolver"}
        </button>
      </td>
    `;

    bookTable.appendChild(row);
  });
};

// Adiciona um novo livro
const addBook = () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;

  if (title && author) {
    books.push({ title, author, status: "Available" });
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    renderBooks();
  } else {
    alert("Por favor, preencha os campos de título e autor.");
  }
};

// Alterna o status de um livro
const toggleStatus = (index) => {
  books[index].status =
    books[index].status === "Available" ? "Borrowed" : "Available";
  renderBooks();
};

// Inicializa o app
document.querySelector("#addBookBtn").addEventListener("click", addBook);
renderBooks();
