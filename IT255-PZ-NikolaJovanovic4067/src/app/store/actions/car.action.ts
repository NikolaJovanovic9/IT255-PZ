import { Action } from "@ngrx/store";
import { Car } from "src/app/interfaces/car";

export enum EnumCarAction {
    GetCars = '[Car] Get Car',
    GetCarSuccess = '[Car] Get Car Success',
}

export class GetCars implements Action {
    public readonly type = EnumCarAction.GetCars;
}

export class GetCarSuccess implements Action {
    public readonly type = EnumCarAction.GetCarSuccess;
    constructor(public payload: Car[]) { }
}

export type CarActions = GetCars | GetCarSuccess;

