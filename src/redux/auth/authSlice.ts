import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/task";
import { logIn, logOut, refreshUser, register } from "./operations";

interface AuthState {
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
    isRefreshing: boolean;
};

const initialState: AuthState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, action) => {

            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true; 
            }) 
            .addCase(register.rejected, (state, action) => {

            })
            .addCase(logIn.pending, (state, action) => {

            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true; 
            }) 
            .addCase(logIn.rejected, (state, action) => {

            })
            .addCase(logOut.pending, (state, action) => {

            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.user = {
                    name: null,
                    email: null
                };
                state.token = null;
                state.isLoggedIn = false;
            }).addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            }).addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })              
    }
})

export default authSlice.reducer;