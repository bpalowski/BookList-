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
// UI show alert
UI.prototype.showAlert = function (message, className) {
	// Create div
	const div = document.createElement('div');

	// Add Class
	div.className = `alert ${className}`;

	// Add text 
	div.appendChild(document.createTextNode(message));

	// get parent 
	const container = document.querySelector('.container');
	// Get form
	const form = document.querySelector('#book-form');
	//// Inerst before the form and what
	container.insertBefore(div, form);

	// Timeout after 3 seconds
	setTimeout(function () {
		document.querySelector('.alert').remove();
	}, 1000);
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

	// Validate
	if (title === "" || author === "" || isbn === "") {
		// Error Alert
		ui.showAlert('Please fill in all fields', 'error');
	} else {
		// Add book tot list pass const  newbook 
		ui.createBook(newBook)

		// Show success
		ui.showAlert('Book Added', 'success');

		// Clear fields
		ui.clearFields();
	}



	e.preventDefault();
})
