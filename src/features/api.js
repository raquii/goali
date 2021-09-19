import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "login",
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "logout",
                method: 'DELETE',
            }),
        }),
        isLoggedIn: builder.mutation({
            query: () => ({
                url: 'me',
            })
        }),
        updateHabit: builder.mutation({
            query:(habit) => ({
                url:`habits/${habit.id}`,
                method:"PATCH",
                body: habit,
            })
        }),
        newHabit: builder.mutation({
            query:(habit) => ({
                url:"habits",
                method:"POST",
                body: habit,
            })
        }),
        deleteHabit: builder.mutation({
            query:(habit) => ({
                url:`habits/${habit.id}`,
                method:"DELETE",
                body: habit,
            })
        }),
        newLog: builder.mutation({
            query:(log) => ({
                url:"logs",
                method:"POST",
                body: log,
            })
        }),
        updateLog: builder.mutation({
            query:(log) => ({
                url:`logs/${log.id}`,
                method:"PATCH",
                body: log,
            })
        }),
        deleteLog: builder.mutation({
            query:(log) => ({
                url:`logs/${log.id}`,
                method:"DELETE",
                body: log,
            })
        }),
        updateProfile: builder.mutation({
            query:(profile) => ({
                url:`profiles/${profile.id}`,
                method:"PATCH",
                body: profile,
            })
        }),
    })
})


export const { 
    useLoginMutation, 
    useLogoutMutation, 
    useIsLoggedInMutation, 
    useNewHabitMutation, 
    useUpdateHabitMutation,
    useDeleteHabitMutation, 
    useUpdateProfileMutation, 
    useNewLogMutation, 
    useUpdateLogMutation, 
    useDeleteLogMutation } = api;

export const { endpoints: { 
    login, 
    logout, 
    isLoggedIn, 
    updateHabit, 
    newHabit,
    deleteHabit, 
    newLog, 
    updateLog, 
    deleteLog, 
    updateProfile } } = api;
