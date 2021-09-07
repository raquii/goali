import { combineReducers } from "redux";
import { userSlice } from "./user/userSlice";
import { api } from "./api";

export const rootReducer = combineReducers({
    user: userSlice,
    [api.reducerPath]: api.reducer,
})