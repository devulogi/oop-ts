import { Library, Catalog, Book } from "./classes/Library";

const library = new Library("New York Public Library", "New York");
const catalog = new Catalog();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 3);
const book2 = new Book("Crime and Punishment", "Fyodor Dostoevsky", "9780143058142", 2);
const book3 = new Book("War and Peace", "Leo Tolstoy", "9781400079988", 5);

catalog.addBook(book1);
catalog.addBook(book2);
catalog.addBook(book3);
library.addCatalog(catalog);

console.log(library.catalogs[0].books[0].title); // The Great Gatsby
console.log(library.catalogs[0].books[1].title); // Crime and Punishment
console.log(library.catalogs[0].books[2].title); // War and Peace
