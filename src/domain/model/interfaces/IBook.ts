import {IEntity} from "./IEntity";
import {IVersion} from "./IVersion";
import {IIdentity} from "./IIdentity";

export interface IBook extends IEntity, IVersion {
    Name: string;
    Description: string;
    ISBN: string;
    Identity: IIdentity
}