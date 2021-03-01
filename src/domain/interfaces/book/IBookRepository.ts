import {Book} from "../../model/data/book";
import {IUpdate} from "../../common/IUpdate";
import {IAdd} from "../../common/IAdd";
import {IDelete} from "../../common/IDelete";
import {IGet} from "../../common/IGet";
import {IBook} from "../../model/interfaces/IBook";

export interface IBookRepository extends IUpdate<IBook>, IAdd<IBook>, IDelete<IBook>, IGet<IBook> {
}
