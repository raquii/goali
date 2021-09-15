import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const initialState = {
    username: "",
    name: "",
    email: "",
    birthday: "",
    profile: {
        id:"",
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
                console.log('fulfilled-logout', state);
                return state = initialState;
            })
            .addMatcher(api.endpoints.isLoggedIn.matchFulfilled, (state, action)=>{
                console.log('fulfilled-session recovered', action);
                state.name = action.payload.name;
                state.username = action.payload.username;
                state.email = action.payload.email;
                state.birthday = action.payload.birthday;
                state.profile.id = action.payload.profile.id;
                state.profile.location = action.payload.profile.location;
                state.profile.bio = action.payload.profile.bio;
                state.profile.profile_picture = action.payload.profile.profile_picture;
                state.habits = action.payload.habits;
            })
            .addMatcher(api.endpoints.updateHabit.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(api.endpoints.updateHabit.matchFulfilled, (state, action) => {
                console.log('fulfilled-updateHabit', action);
                state.habits = state.habits.map(habit=> habit.id === action.payload.id ? action.payload : habit);
            })
            .addMatcher(api.endpoints.updateHabit.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
            .addMatcher(api.endpoints.newHabit.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(api.endpoints.newHabit.matchFulfilled, (state, action) => {
                console.log('fulfilled-newHabit', action);
                state.habits = [...state.habits, action.payload.habit];
            })
            .addMatcher(api.endpoints.newHabit.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
            .addMatcher(api.endpoints.updateProfile.matchFulfilled, (state, action) => {
                console.log('fulfilled-updateProfile', action);
                state.profile.bio = action.payload.bio;
                state.profile.location = action.payload.location;
            })
    }
})

export const { logout } = slice.actions;

export default slice.reducer;