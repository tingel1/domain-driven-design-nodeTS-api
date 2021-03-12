import {IGet} from "../primitives/IGet";
import {IGetAll} from "../primitives/IGetAll";
import {IGetMany} from "../primitives/IGetMany";

export interface IGetCollection <IGetT, IGetAllT, IGetManyT>
    extends IGet<IGetT>, IGetAll<IGetAllT>, IGetMany<IGetManyT> {
}
