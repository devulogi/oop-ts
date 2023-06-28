import { Book } from "./Book";

export class Catalog {
  public books: Book[] = [];
  constructor(public name: string) {
    this.name = name;
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
