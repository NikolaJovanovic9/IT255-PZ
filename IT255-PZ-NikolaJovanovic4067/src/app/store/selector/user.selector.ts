import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../state/user.state";

const selectUsers = (state: any) => state.user;

export const selectedUsers = createSelector(
    selectUsers,
    (state: UserState) => {
        return state.users
    }
);

export const selectUserss = createSelector(
    createFeatureSelector('users'),
    (state: UserState) => {
        return state.users;
    }
)
