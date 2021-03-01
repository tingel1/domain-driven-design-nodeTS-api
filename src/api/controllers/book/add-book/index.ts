import {AddBookController} from "./add-book.controller";
import {IBookService} from "../../../../domain/service-interfaces/book/IBookService";
import {BookService} from "../../../../services/application/book/BookService";
import {IBookRepository} from "../../../../domain/interfaces/book/IBookRepository";
import {MongoDbBookRepository} from "../../../../database/MongoDB/Repositories/book/MongoDbBookRepository";

const bookRepository: IBookRepository = new MongoDbBookRepository();
const bookService: IBookService = new BookService(bookRepository);
const createBookController = new AddBookController(bookService);

export { createBookController }
