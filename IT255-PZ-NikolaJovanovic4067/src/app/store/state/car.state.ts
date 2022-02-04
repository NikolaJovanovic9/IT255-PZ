import { Car } from "src/app/interfaces/car";

export interface CarState {
    cars: Array<Car>;
}

export const initalCarState: CarState = {
    cars: []
}