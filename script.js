const inputBookTitle = document.querySelector('#input-book-title')
const inputBookAuthor = document.querySelector('#input-book-author')
const inputBookYear = document.querySelector('#input-book-year')
const inputBookPages = document.querySelector('#input-book-pages')
const form = document.querySelector('form')
const divBooks = document.querySelector('.books')

class Book {
  constructor(title, author, year, pages) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.year = year
    this.pages = pages
    this.status = 'To read'
  }

  changeStatus() {
    switch (this.status) {
      case 'To read':
        this.status = 'Reading'
        break
      case 'Reading':
        this.status = 'Read'
        break
      case 'Read':
        this.status = 'To read'
        break
    }
  }
}

let myLibrary = []
myLibrary.push(new Book('1984', 'George Orwell', 1949, 328))

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

      <div class="tag-status">${book.status}</div>

      <button class="btn-rmv">Remove</button>
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
  const isRemoveBookButton = e.target.classList.contains('btn-rmv')
  const isChangeStatusButton = e.target.classList.contains('tag-status')

  if (isRemoveBookButton) {
    const bookCard = e.target.parentElement
    const bookCardID = bookCard.dataset.id
    myLibrary = myLibrary.filter((book) => book.id !== bookCardID)

    renderBooks()
  } else if (isChangeStatusButton) {
    const bookCard = e.target.parentElement
    const bookCardID = bookCard.dataset.id
    const book = myLibrary.find((book) => book.id === bookCardID)

    book.changeStatus()
    renderBooks()
  }
  console.log(e)
})

renderBooks()
