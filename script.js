const divBooks = document.querySelector('.books')
const btnNewBook = document.querySelector('.btn-new-book')

class Book {
  constructor(title, author, year) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.year = year
  }
}

const myLibrary = []

const addBookToLibrary = (title) => {
  myLibrary.push(new Book('1984', 'George Orwell', 1949))
}

btnNewBook.addEventListener('click', () => {})

addBookToLibrary()

console.log(myLibrary)
