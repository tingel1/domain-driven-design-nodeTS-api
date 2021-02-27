import {Identity} from "./Identity";
import {IBook} from "../interfaces/IBook";

export class Book implements IBook {
    constructor(id: string,
                identity: Identity,
                version: string,
                ISBN: string,
                name: string,
                description: string) {
        this._Id = id;
        this._ISBN = ISBN;
        this._name = name;
        this._description = description;
        this._Version = version;
        this._Identity = identity;
    }

    get Version(): string {
        return this._Version;
    }

    set Version(value: string) {
        this._Version = value;
    }

    set Id(value: string) {
        this._Id = value;
    }
    get Id(): string {
        return this._Id;
    }

    get Name(): string {
        return this._name;
    }
    set Name(value: string) {
        this._name = value;
    }

    get Description(): string {
        return this._description;
    }
    set Description(value: string) {
        this._description = value;
    }

    get ISBN(): string {
        return this._ISBN;
    }
    set ISBN(value: string) {
        this._ISBN = value;
    }

    get Identity(): Identity {
        return this._Identity;
    }

    set Identity(value: Identity) {
        this._Identity = value;
    }

    private _Id: string;

    private _Identity: Identity;

    private _Version: string;

    private _name: string;

    private _description: string;

    private _ISBN: string;
}