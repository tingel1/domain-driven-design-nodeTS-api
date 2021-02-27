import {IIdentity} from "../interfaces/IIdentity";
import {GUID} from "../interfaces/types";

export class Identity implements IIdentity {
    constructor(tenantId: GUID,
                userId: GUID) {
        this._TenantId = tenantId;
        this._UserId = userId;
    }
    get UserId(): GUID {
        return this._UserId;
    }

    set UserId(value: GUID) {
        this._UserId = value;
    }
    get TenantId(): GUID {
        return this._TenantId;
    }

    set TenantId(value: GUID) {
        this._TenantId = value;
    }

    private _TenantId: GUID;
    private _UserId: GUID;

}