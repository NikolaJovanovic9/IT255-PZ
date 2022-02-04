import { Action } from "@ngrx/store";
import { User } from "src/app/interfaces/user";

export enum EnumUserAction {
    GetUsers = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
}

export class GetUsers implements Action {
    public readonly type = EnumUserAction.GetUsers;
}

export class GetUserSuccess implements Action {
    public readonly type = EnumUserAction.GetUserSuccess;
    constructor(public payload: User[]) { }
}

export type UserActions = GetUsers | GetUserSuccess;

