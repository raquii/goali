import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const initialState = {
    username: "",
    name: "",
    email: "",
    birthday: "",
    profile: {
        id: "",
        location: "",
        bio: "",
        profile_picture: ""
    },
    habits: []
};

export const slice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(api.endpoints.login.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(api.endpoints.login.matchFulfilled, (state, action) => {
                console.log('fulfilled-login', action);
                const { name, username, email, birthday, profile, habits } = action.payload;
                Object.assign(state, { name, username, email, birthday, profile, habits })
            })
            .addMatcher(api.endpoints.login.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
            .addMatcher(api.endpoints.logout.matchFulfilled, (state) => {
                console.log('fulfilled-logout', state);
                return state = initialState;
            })
            .addMatcher(api.endpoints.isLoggedIn.matchFulfilled, (state, action) => {
                console.log('fulfilled-session recovered', action);
                const { name, username, email, birthday, profile, habits } = action.payload;
                Object.assign(state, { name, username, email, birthday, profile, habits })
            })
            .addMatcher(api.endpoints.updateHabit.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(api.endpoints.updateHabit.matchFulfilled, (state, action) => {
                console.log('fulfilled-updateHabit', action);
                return {
                    ...state, habits: state.habits.map(habit => {
                        if (habit.id === action.payload.id) {
                            return action.payload
                        }
                        return habit
                    })
                }
            })
            .addMatcher(api.endpoints.updateHabit.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
            .addMatcher(api.endpoints.newHabit.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(api.endpoints.newHabit.matchFulfilled, (state, action) => {
                console.log('fulfilled-newHabit', action);
                state.habits.push(action.payload)
            })
            .addMatcher(api.endpoints.newHabit.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
            .addMatcher(api.endpoints.deleteHabit.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(api.endpoints.deleteHabit.matchFulfilled, (state, action) => {
                console.log('fulfilled-deleteHabit', action);
                const newHabits = state.habits.filter(habit=> habit.id !== action.payload.id)
                state.habits = newHabits
            })
            .addMatcher(api.endpoints.deleteHabit.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
            .addMatcher(api.endpoints.updateProfile.matchFulfilled, (state, action) => {
                console.log('fulfilled-updateProfile', action);
                return {
                    ...state, profile: {...action.payload}
                }
            })
            .addMatcher(api.endpoints.newLog.matchFulfilled, (state, action) => {
                console.log('fulfilled-newLog', action);
                return {
                    ...state, habits: state.habits.map(habit => {
                        if (habit.id === action.payload.id) {
                            return action.payload
                        }
                        return habit
                    })
                }
            })
            .addMatcher(api.endpoints.updateLog.matchPending, (state, action) => {
                console.log('pending', action);
            })
            .addMatcher(api.endpoints.updateLog.matchFulfilled, (state, action) => {
                console.log('fulfilled-updateLog', action);
                return {
                    ...state, habits: state.habits.map(habit => {
                        if (habit.id === action.payload.habit_id) {
                            habit.logs.map(log=>{
                               if (log.id === action.payload.id){
                                   return action.payload
                               }
                               return log
                            })
                        }
                        return habit
                    })
                }
            })
            .addMatcher(api.endpoints.updateLog.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
            .addMatcher(api.endpoints.deleteLog.matchFulfilled, (state, action) => {
                console.log('fulfilled-deleteLog', action);
                return {
                    ...state, habits: state.habits.map(habit => {
                        if (habit.id === action.payload.id) {
                            return action.payload
                        }
                        return habit
                    })
                }
            })
            .addMatcher(api.endpoints.deleteLog.matchRejected, (state, action) => {
                console.log('rejected', action);
            })
    }
})

export const { logout } = slice.actions;

export default slice.reducer;