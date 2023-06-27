export class Catalog {
  constructor(public books: Book[] = []) {
    this.books = books;
  }
  search(title: string): Book | null {
    const book = this.books.find((book) => book.title === title);
    return book ? book : null;
  }
  addBook(book: Book): void {
    this.books.push(book);
  }
  removeBook(book: Book): void {
    const index = this.books.findIndex((b) => b.isbn === book.isbn);
    if (index !== -1) {
      this.books.splice(index, 1);
    } else {
      console.log(`Book with ISBN ${book.isbn} not found in catalog.`);
    }
  }
  listBooks(): void {
    this.books.forEach((book) => console.log(book));
  }
  editBook(isbn: string, data: Partial<Book>): void {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      Object.assign(book, data);
    }
  }
}

export class Book {
  constructor(
    public title: string,
    public author: string,
    public isbn: string,
    public numOfCopies: number
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numOfCopies = numOfCopies;
  }
  printDetails() {}
  getTitle() {}
  getAuthor() {}
  getISBN() {}
  getNumOfCopies() {}
  setNumOfCopies() {}
}

export class Library {
  public catalogs: Catalog[];
  constructor(public name: string, public address: string) {
    this.name = name;
    this.address = address;
    this.catalogs = [];
  }
  addCatalog(catalog: Catalog): void {
    this.catalogs.push(catalog);
  }
}
