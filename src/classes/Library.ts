import { Book } from "./Book";
import { Catalog } from "./Catalog";

type CatalogDetails = {
  name: string;
  numOfBooks: number;
};

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
  search(catalogName: string): null | Book[] {
    if (!catalogName) throw new Error('Catalog name is required');
    const catalog = this.catalogs.find((catalog: Catalog) => catalog.name === catalogName);
    if (catalog) {
      return catalog.books;
    }
    return null;
  }
  static ShowLibraryDetails(library: Library): CatalogDetails[] {
    return library.catalogs.map((catalog: Catalog) => ({ name: catalog.name, numOfBooks: catalog.books.length }));
  }
}
