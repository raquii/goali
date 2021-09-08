import { configureStore } from "@reduxjs/toolkit";
import { api } from './api'
import userReducer from "./user/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export default store;