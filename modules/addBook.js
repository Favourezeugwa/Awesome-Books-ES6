const bookList = document.querySelector('.book-list');
export const addForm = document.querySelector('.add-form');
export const formTitle = document.querySelector('#title');
export const formAuthor = document.querySelector('#author');

export const addBook = (book) => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book-item');
  bookList.appendChild(bookItem);

  const p = document.createElement('p');
  p.textContent = `'${book.title}' by ${book.author}`;
  bookItem.appendChild(p);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Remove';
  bookItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', (event) => {
    book.removeFromShelf();
    event.target.parentElement.remove();
  });
};
