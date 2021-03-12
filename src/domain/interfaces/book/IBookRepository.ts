import {IGetCollection} from "../../common/IGetCollection";
import {IBook} from "../../model/interfaces/IBook";
import {GUID} from "../../model/interfaces/types";
import {IDelete} from "../../primitives/IDelete";
import {IAddCollection} from "../../common/IAddCollection";
import {IUpdate} from "../../primitives/IUpdate";

export interface IBookRepository
    extends IGetCollection<IBook, IBook[], IBook[]>,
        IDelete<GUID>,
        IAddCollection<IBook, IBook[]>,
        IUpdate<IBook[]> {
}
