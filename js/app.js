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

// Show alert
UI.prototype.showAlert = function(message, className){
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert alert
  container.insertBefore(div, form);
  // Timeout after 3 seconds

setTimeout(function(){
  document.querySelector('.alert').remove();
}, 2000);
}

// Delete Book 
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}



//Clear Fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}

// Event Listener for Add Book 
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

  // Instaniate UI
  const ui = new UI();
    // console.log(ui); // the method addBookToList is now in the prototype

    console.log(ui);
 
    // Validate
    if(title === '' || author === '' || isbn === ''){
      ui.showAlert('Please fill in all fields', 'error');
    } else {  
      
      // add book to list
      ui.addBookToList(book);

      // Show success
      ui.showAlert('Book Added', 'success'); // class of success

      // Clear Fields
      ui.clearFields();

    }
    
      e.preventDefault();

});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    // Instaniate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    // Show message
    ui.showAlert('Book Removed', 'success');
  
  e.preventDefault();
});