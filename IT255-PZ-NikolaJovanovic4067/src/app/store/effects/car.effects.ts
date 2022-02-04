import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { Car } from "src/app/interfaces/car";
import { CarService } from "src/app/services/car.service";
import { EnumCarAction, GetCars, GetCarSuccess } from "../actions/car.action";
import { switchMap } from "rxjs/operators";

@Injectable()
export class CarEffect {
    constructor(private _actions$: Actions, private carService: CarService) {

    }

    getCars$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetCars>(EnumCarAction.GetCars),
            switchMap(() => this.carService.fetchCars()),
            switchMap((carHttp: Car[]) => {
                return of(new GetCarSuccess(carHttp))
            }
            )
        )
    )
}