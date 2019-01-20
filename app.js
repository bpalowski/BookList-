// Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// Ui Constructor
function UI() { }

UI.prototype.addBookToList = function (newBook) {
	const list = document.getElementById('book-list');

	// Create Element
	const row = document.createElement('tr');

	// insert calls
	row.innerHTML =
		`<td>${newBook.title}</td>
	<td>${newBook.author}</td>
	<td>${newBook.isbn}</td>
	<td><a href="#" class="delete">X</a></td>`;
	list.appendChild(row);
}

UI.prototype.clearFields = function () {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}



// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
	// Get Values
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;


	// Instantiating new Book
	const newBook = new Book(title, author, isbn);

	// Instatiate UI 
	const ui = new UI();

	// prototype
	ui.addBookToList(newBook);

	// Clear Input fields
	ui.clearFields();

	e.preventDefault();
});
