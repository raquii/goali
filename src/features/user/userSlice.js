import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const initialState = {
    username: "",
    name: "",
    email: "",
    birthday: "",
    profile: {
        location: "",
        bio: "",
        profile_picture:""
    },
    habits:[]
};

export const slice = createSlice({
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
                console.log('fulfilled-login', action);
                state.name = action.payload.name;
                state.username = action.payload.username;
                state.email = action.payload.email;
                state.birthday = action.payload.birthday;
                state.profile.location = action.payload.profile.location;
                state.profile.bio = action.payload.profile.bio;
                state.profile.profile_picture = action.payload.profile.profile_picture;
                state.habits = action.payload.habits;
            })
            .addMatcher(api.endpoints.login.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
            .addMatcher(api.endpoints.logout.matchFulfilled, (state) => {
                state = initialState;
                console.log('fulfilled-logout', state);
            })
            .addMatcher(api.endpoints.isLoggedIn.matchFulfilled, (state, action)=>{
                console.log('fulfilled-session recovered', action);
                state.name = action.payload.name;
                state.username = action.payload.username;
                state.email = action.payload.email;
                state.birthday = action.payload.birthday;
                state.profile.location = action.payload.profile.location;
                state.profile.bio = action.payload.profile.bio;
                state.profile.profile_picture = action.payload.profile.profile_picture;
                state.habits = action.payload.habits;
            })
            

    }
})

export const { logout } = slice.actions;

export default slice.reducer;