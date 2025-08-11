const dialog = document.getElementById("popupDialog");
const addBtn = document.getElementById("addBtn");
const form = document.getElementById("userForm");
const icon = document.querySelector(".cross span");
const cards = document.querySelector(".cards");

const lib = []; // Object Array

// Open dialog
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const pages = document.getElementById("pages").value;
  const url = document.getElementById("url").value;
  const status = document.getElementById("status").value;

  let b = new Book(name, author, genre, pages, url, status);
  lib.push(b);

  // Create the main book card container
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  // ==== Book Cover Section ====
  const bookCover = document.createElement("div");
  bookCover.classList.add("book-cover");

  const coverImg = document.createElement("img");
  coverImg.src = url;
  coverImg.alt = "Book Cover";

  bookCover.appendChild(coverImg);

  // ==== Book Details Section ====
  const bookDetails = document.createElement("div");
  bookDetails.classList.add("book-details");

  // Title
  const title = document.createElement("h2");
  title.classList.add("book-title");
  title.textContent = name;

  // Author
  const auth = document.createElement("p");
  auth.classList.add("book-author");
  auth.innerHTML = `<strong>Author:</strong> ${author}`;

  // Genre
  const genr = document.createElement("p");
  genr.classList.add("book-genre");
  genr.innerHTML = `<strong>Genre:</strong> ${genre}`;

  // Pages
  const page = document.createElement("p");
  page.classList.add("book-pages");
  page.innerHTML = `<strong>Pages:</strong> ${pages}`;

  // Status Label
  const statusLabel = document.createElement("label");
  statusLabel.setAttribute("for", "status");
  statusLabel.innerHTML = "<strong>Read Status:</strong>";

  // Status Select
  const statusSelect = document.createElement("select");
  statusSelect.id = "status";

  const optionRead = new Option("Finished Reading", "read");
  const optionReading = new Option("Currently Reading", "reading");
  const optionWant = new Option("Want to Read", "want");

  statusSelect.add(optionRead);
  statusSelect.add(optionReading);
  statusSelect.add(optionWant);

  if(status === "read"){
    optionRead.selected = true;
  }
  else if(status === "reading"){
    optionReading.selected = true;
  }
  else if(status === "want"){
    optionWant.selected = true;
  }

  // Remove Button
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.innerHTML = `<span class="mdi mdi-delete"></span> Remove`;

  // Append all details
  bookDetails.appendChild(title);
  bookDetails.appendChild(auth);
  bookDetails.appendChild(genr);
  bookDetails.appendChild(page);
  bookDetails.appendChild(statusLabel);
  bookDetails.appendChild(statusSelect);
  bookDetails.appendChild(removeBtn);

  // Append cover & details to main card
  bookCard.appendChild(bookCover);
  bookCard.appendChild(bookDetails);

  // Append the whole card to the cards container
  cards.appendChild(bookCard);

  removeBtn.addEventListener("click", ()=>{
    bookCard.style.display = "none";
  });

  dialog.close();
  form.reset();
});

// Close Form (Cross Icon)
icon.addEventListener("click", () => {
  dialog.close();
});

// Book Constructor
function Book(title, author, genre, pages, url, status) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.url = url;
  this.status = status;
}