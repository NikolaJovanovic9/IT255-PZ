import { ActionReducerMap } from "@ngrx/store";
import { CarState } from "../state/car.state";
import { UserState } from "../state/user.state";
import { carReducer } from "./car.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = {};

export interface AppState {
    car: CarState;
    user: UserState;
}

export const reducers: ActionReducerMap<AppState, any> = {
    car: carReducer,
    user: userReducer
};