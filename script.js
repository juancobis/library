const inputBookTitle = document.querySelector('#input-book-title')
const inputBookAuthor = document.querySelector('#input-book-author')
const inputBookYear = document.querySelector('#input-book-year')
const form = document.querySelector('form')
const divBooks = document.querySelector('.books')

class Book {
  constructor(title, author, year) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.year = year
  }
}

const myLibrary = []
myLibrary.push(new Book('1984', 'George Orwell', 1949))

const addBookToLibrary = (title, author, year) => {
  if (
    typeof title !== 'string' ||
    typeof author !== 'string' ||
    typeof year !== 'number'
  ) {
    console.error('niño malo')
    return
  }

  myLibrary.push(new Book(title, author, year))
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = inputBookTitle.value
  const author = inputBookAuthor.value
  const year = +inputBookYear.value

  addBookToLibrary(title, author, year)
  renderBooks()
})

const renderBooks = () => {
  divBooks.innerHTML = ''

  myLibrary.forEach((book) => {
    const bookCard = document.createElement('div')

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.year}</p>
    `

    bookCard.classList.add('card', 'book')

    divBooks.appendChild(bookCard)

    console.log(book)
  })
}
