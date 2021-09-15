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
        updateProfile: builder.mutation({
            query:(profile) => ({
                url:`profiles/${profile.id}`,
                method:"PATCH",
                body: profile,
            })
        }),
    })
})


export const { useLoginMutation, useLogoutMutation, useIsLoggedInMutation, useNewHabitMutation, useUpdateHabitMutation, useUpdateProfileMutation } = api;

export const { endpoints: { login, logout, isLoggedIn, updateHabit, newHabit, updateProfile } } = api;
