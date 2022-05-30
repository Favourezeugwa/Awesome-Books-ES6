const sectionForAddedBooks = document.querySelector('.book-list-section');
const formSection = document.querySelector('.form-section');
const contactSection = document.querySelector('#contact');

const toggler = () => {
  const navList = document.querySelector('#nav-List');
  navList.addEventListener('click', (event) => {
    event.preventDefault();
    sectionForAddedBooks.style.display = 'flex';
    formSection.style.display = 'none';
    contactSection.style.display = 'none';
  });

  const navAdd = document.querySelector('#nav-Add');
  navAdd.addEventListener('click', (event) => {
    event.preventDefault();
    sectionForAddedBooks.style.display = 'none';
    formSection.style.display = 'flex';
    contactSection.style.display = 'none';
  });

  const navContact = document.querySelector('#nav-Contact');
  navContact.addEventListener('click', (event) => {
    event.preventDefault();
    sectionForAddedBooks.style.display = 'none';
    formSection.style.display = 'none';
    contactSection.style.display = 'flex';
  });
};

export default toggler;
