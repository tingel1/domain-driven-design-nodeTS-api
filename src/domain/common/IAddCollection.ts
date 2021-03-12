import {IAdd} from "../primitives/IAdd";
import {IAddMany} from "../primitives/IAddMany";

export interface IAddCollection<IAddT, IAddManyT> extends IAdd<IAddT>, IAddMany<IAddManyT>{

}
