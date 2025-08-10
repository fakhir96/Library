const dialog = document.getElementById("popupDialog");
const addBtn = document.getElementById("addBtn");
const form = document.getElementById("userForm");
const icon = document.querySelector(".cross span");

// Open dialog
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  console.log(`Name: ${name}, Author: ${author}, Pages: ${pages}`);
  alert(`Submitted!\nName: ${name}\nAuthor: ${author}\nPages: ${pages}`);

  dialog.close();
  form.reset();
});

icon.addEventListener("click", ()=>{
  dialog.close();
})

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead; // true for "Read", false for "Unread"
}

const lib = [];

const b1 = new Book("aq", "dw", 67, true);

lib.push(b1);
lib.forEach(book => {
  const status = book.isRead ? "Read" : "Unread";
  console.log(`${book.title} by ${book.author}, ${book.pages} pages - ${status}`);
});