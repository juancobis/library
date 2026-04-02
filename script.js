class Book {
  constructor(title, autor, year, ...genres) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.year = year
    this.genres = [...genres]
  }
}
