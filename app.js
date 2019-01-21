// book constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}



// UI constructor displays 

function UI() { };

// Create add book prototype

UI.prototype.createBook = function (newBook) {
	const list = document.getElementById('book-list');

	// Create Element
	const row = document.createElement('tr');
	row.innerHTML = `
	<td>${newBook.title}</td>
	<td>${newBook.author}</td>
	<td>${newBook.isbn}</td>
	<td><a href="#" class="delete">X</a></td>
	`;
	list.appendChild(row)
}

/// Clear Fields Prototype

UI.prototype.clearFields = function () {
	document.getElementById('title').value = "";
	document.getElementById('author').value = "";
	document.getElementById('isbn').value = "";
}

// Event Listeners

document.getElementById('book-form').addEventListener('submit', function (e) {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;

	// Instatiate new book
	const newBook = new Book(title, author, isbn);

	// instatiate UI
	const ui = new UI();

	// Add book tot list pass const  newbook 
	ui.createBook(newBook)

	// Clear fields
	ui.clearFields();

	e.preventDefault();
})
