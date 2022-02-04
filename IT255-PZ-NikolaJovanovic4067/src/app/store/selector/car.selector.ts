import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CarState } from "../state/car.state";

const selectCars = (state: any) => state.car;

export const selectedCars = createSelector(
    selectCars,
    (state: CarState) => {
        return state.cars
    }
);

export const selectCarss = createSelector(
    createFeatureSelector('cars'),
    (state: CarState) => {
        return state.cars;
    }
)