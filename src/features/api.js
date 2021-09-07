import { createApi, fetchBaseQuery,  } from '@reduxjs/toolkit/query/react'

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
        isLoggedIn: builder.query({
            query: () => ({
                url: 'me', 
            })
        }),
    })
})


export const { useLoginMutation, useLogoutMutation, useIsLoggedInQuery } = api;

