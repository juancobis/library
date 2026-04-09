const inputBookTitle = document.querySelector('#input-book-title')
const inputBookAuthor = document.querySelector('#input-book-author')
const inputBookYear = document.querySelector('#input-book-year')
const inputBookPages = document.querySelector('#input-book-pages')
const btnsRemoveBook = document.querySelectorAll('.btn-rmv-book')
const btnsStatusBook = document.querySelectorAll('.btn-status-book')
const form = document.querySelector('form')
const divBooks = document.querySelector('.books')

class Book {
  constructor(title, author, year, pages) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.year = year
    this.pages = pages
    this.status = 'to-read'
  }
}

let myLibrary = []
myLibrary.push(new Book('1984', 'George Orwell', 1949, 130))

const addBookToLibrary = (title, author, year, pages) => {
  if (
    typeof title !== 'string' ||
    typeof author !== 'string' ||
    !Number.isInteger(year) ||
    year < 0 ||
    !Number.isInteger(pages) ||
    pages < 0
  ) {
    console.error('niño malo')
    return
  }

  myLibrary.push(new Book(title, author, year, pages))
}

const renderBooks = () => {
  divBooks.innerHTML = ''

  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div')

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.year}</p>

      <small>${book.pages}</small>
    `

    bookCard.dataset.id = book.id
    bookCard.classList.add('card')
    divBooks.appendChild(bookCard)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = inputBookTitle.value
  const author = inputBookAuthor.value
  const year = +inputBookYear.value
  const pages = +inputBookPages.value

  addBookToLibrary(title, author, year, pages)
  renderBooks()
})

divBooks.addEventListener('click', (e) => {
  const isRemoveBookButton = e.target.classList.contains('btn-rmv-book')
  const isChangeStatusButton = e.target.classList.contains('btn-status-book')

  if (isRemoveBookButton) {
    const cardID = e.target.parentElement.dataset.id
    myLibrary = myLibrary.filter(book => book.id !== cardID)
    renderBooks()
  }
  console.log(e)
})
