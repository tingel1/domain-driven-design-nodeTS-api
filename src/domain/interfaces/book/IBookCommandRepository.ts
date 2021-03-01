import {Book} from "../../model/data/book";
import {IUpdate} from "../../common/IUpdate";
import {IAdd} from "../../common/IAdd";
import {IDelete} from "../../common/IDelete";

export interface IBookCommandRepository extends IUpdate<Book>, IAdd<Book>, IDelete<Book> {
}
