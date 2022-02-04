import { EnumCarAction, CarActions } from "../actions/car.action"
import { initalCarState } from "../state/car.state"

export function carReducer(
    state = initalCarState,
    action: CarActions
) {
    switch (action.type) {
        case EnumCarAction.GetCarSuccess: {
            return {
                ...state,
                cars: action.payload
            };
        }
        default:
            return state;
    }
}