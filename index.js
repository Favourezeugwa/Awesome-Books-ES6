// single side page navigation
import toggler from './modules/navigation.js';

import { shelf, Book } from './modules/shelf.js';

import {
  addBook, formAuthor, formTitle, addForm,
} from './modules/addBook.js';

import displayDate from './modules/date.js';

toggler();
setInterval(displayDate, 1000);

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleValue = formTitle.value;
  const authorValue = formAuthor.value;

  // to create an instance/object of the class
  const book = new Book();
  book.title = titleValue;
  book.author = authorValue;

  // to add the created book to shelf
  book.addToShelf();
  addBook(book);

  // to clear/reset the input field
  addForm.reset();
});

// to display bookItem from the local storage
for (let i = 0; i < shelf.length; i += 1) {
  const book = new Book();
  book.title = shelf[i].title;
  book.author = shelf[i].author;
  addBook(book);
}
