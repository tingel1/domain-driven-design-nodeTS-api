import {AddBookController} from "./add-book.controller";
import {IBookService} from "../../../../domain/service-interfaces/book/IBookService";
import {BookService} from "../../../../services/application/book/BookService";

const bookService: IBookService = new BookService();
const createBookController = new AddBookController(bookService);

export { createBookController }
