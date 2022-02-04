import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";
import { EnumUserAction, GetUsers, GetUserSuccess } from "../actions/user.action";
import { switchMap } from "rxjs/operators";

@Injectable()
export class UserEffect {
    constructor(private _actions$: Actions, private userService: UserService) {

    }

    getUsers$ = createEffect(() =>
        this._actions$.pipe(
            ofType<GetUsers>(EnumUserAction.GetUsers),
            switchMap(() => this.userService.fetchUsers()),
            switchMap((userHttp: User[]) => {
                return of(new GetUserSuccess(userHttp))
            }
            )
        )
    )
}