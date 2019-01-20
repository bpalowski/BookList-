// Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}


// UI Constructor
function UI() { };


UI.prototype.addBookToList = function (bookList) {
	const list = document.getElementById('book-list');
	/// Create tr element
	const row = document.createElement('tr');

	// insert rows

	row.innerHTML = `
	<td>${bookList.title}</td>
	<td>${bookList.author}</td>
	<td>${bookList.isbn}</td>
	<td><a href="#" class="delete">X</a></td>`;

	list.appendChild(row);
	console.log(row)
}
// Clear Fields
UI.prototype.clearFields = function () {
	document.getElementById('title').value = "";
	document.getElementById('author').value = "";
	document.getElementById('isbn').value = "";
}

//Event Listener
document.getElementById('book-form').addEventListener('submit', function (e) {
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;


	//// Instatiate new Book
	const bookList = new Book(title, author, isbn);


	/// Instatiate UI
	const ui = new UI();

	// Add Book to list

	ui.addBookToList(bookList);

	// cleear fields method
	ui.clearFields();


	e.preventDefault();
})