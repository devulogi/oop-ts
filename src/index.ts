import { Book } from "./classes/Book";
import { Catalog } from "./classes/Catalog";
import { Library } from "./classes/Library";

const library = new Library("New York Public Library", "New York");

const fictionCatalog = new Catalog("Fiction");
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 3);
const book2 = new Book("Crime and Punishment", "Fyodor Dostoevsky", "9780143058142", 2);
const book3 = new Book("War and Peace", "Leo Tolstoy", "9781400079988", 5);
fictionCatalog.addBook(book1);
fictionCatalog.addBook(book2);
fictionCatalog.addBook(book3);

const realCatalog = new Catalog("Real");
const book4 = new Book("The Road to Reality", "Roger Penrose", "9780679776314", 1);
const book5 = new Book("A Brief History of Time", "Stephen Hawking", "9780553380163", 2);
const book6 = new Book("The Elegant Universe", "Brian Greene", "9780393338102", 3);
realCatalog.addBook(book4);
realCatalog.addBook(book5);
realCatalog.addBook(book6);

library.addCatalog(fictionCatalog);
library.addCatalog(realCatalog);

const libraryDetails = Library.ShowLibraryDetails(library);

console.table(libraryDetails);

enum BookGenre {
  Fiction = "Fiction",
  Real = "Real",
}

const searchResult = library.search(BookGenre.Fiction);
console.table(searchResult);
