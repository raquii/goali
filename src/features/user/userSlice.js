import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const initialState = {
    username: "",
    name: "",
    email: "",
    birthday: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder)=>{
        builder
            .addMatcher(api.endpoints.login.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
                console.log('fulfilled', action);
                state.name = action.payload.name;
                state.username = action.payload.username;
                state.email = action.payload.email;
                state.birthday = action.payload.birthday;
            })
            .addMatcher(api.endpoints.login.matchRejected, (state, action) => {
                console.log('rejected', action);
            });

    }
})

export const { logout } = userSlice.actions;

export default userSlice.reducer;