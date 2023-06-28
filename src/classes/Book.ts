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
