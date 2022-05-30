export let shelf = JSON.parse(localStorage.getItem('shelf')) || [];

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // to add a book to shelf
  addToShelf() {
    shelf.push(this);
    localStorage.setItem('shelf', JSON.stringify(shelf));
  }

  // to remove a book from shelf
  removeFromShelf() {
    shelf = shelf.filter((element) => element.title !== this.title);
    localStorage.setItem('shelf', JSON.stringify(shelf));
  }
}
