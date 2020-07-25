// Book Constructor
// handle creating actual book object 
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// UI Constructor 
// consists of prototype methods to add the book to the list, delete the book, show the alert 

function UI() {}
// add book to list
UI.prototype.addBookToList = function(book){
  // console.log(book);
  const list = document.getElementById('book-list');
  // console.log(list);
  // Create table row element
  const row = document.createElement('tr');
  console.log(row);
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X<a></td>
  `;
  list.appendChild(row);

}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // console.log('test');
  // get form values
  const title = document.getElementById('title').value,
  author = document.getElementById('author').value,
  isbn = document.getElementById('isbn').value;

  // instantiate book constructor
  const book = new Book(title, author, isbn);
  // console.log(book);

  // console.log(title, author, isbn);

  // instaniate UI
  const ui = new UI();
    // console.log(ui); // the method addBookToList is now in the prototype
 
    // add book to list
  ui.addBookToList(book);


  e.preventDefault();
});

