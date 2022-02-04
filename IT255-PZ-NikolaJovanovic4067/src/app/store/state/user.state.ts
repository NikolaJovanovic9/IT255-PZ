import { User } from "src/app/interfaces/user";

export interface UserState {
    users: Array<User>;
}

export const initalUserState: UserState = {
    users: []
}