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

UI.prototype.showAlert = function (message, className) {
	//Create Div
	const div = document.createElement('div');

	// Add classes
	div.className = `alert ${className}`;

	// Add Text
	div.appendChild(document.createTextNode(message));

	// Get a Parent
	const container = document.querySelector('.container');

	const form = document.querySelector('#book-form');
	// Insert Alert
	container.insertBefore(div, form);
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

	// Validate 
	if (title === "" || author === "" || isbn === "") {

		// Error Alert
		ui.showAlert('Please fill in all fields', 'error');

	} else {
		// prototype
		ui.addBookToList(newBook);

		// Clear Input fields
		ui.clearFields();
	}

	e.preventDefault();
});
