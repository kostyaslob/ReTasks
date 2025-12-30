import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/task";

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
})

export default authSlice.reducer;