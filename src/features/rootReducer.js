import { combineReducers } from "redux";
import userSlice from "./user/userSlice";
import { api } from "./api";

const rootReducer = combineReducers({
    user: userSlice,
    [api.reducerPath]: api.reducer,
})

export default rootReducer;