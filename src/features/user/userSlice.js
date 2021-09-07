import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: null,
        username: "",
        name:"",
        email: "",
        birthday: "",
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        
    },
    extraReducers:{
        

    }
})

