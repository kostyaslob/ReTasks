import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/task";
import { register } from "./operations";

interface AuthState {
    user: User | null;
    token: string | null;
    isLoggedIn: boolean;
};

const initialState: AuthState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    isLoggedIn: false,
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
    }
})

export default authSlice.reducer;