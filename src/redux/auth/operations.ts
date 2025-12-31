import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://task-manager-api.goit.global/";

export const register = createAsyncThunk("auth/register", async (values) => {
    const response = await axios.post("/users/signup", values);
    return response.data
})

export const logIn = createAsyncThunk("auth/login", async () => {
    
})

export const logOut = createAsyncThunk("auth/logout", async () => {
    
})