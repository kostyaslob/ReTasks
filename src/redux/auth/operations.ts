import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://task-manager-api.goit.global/";

export const register = createAsyncThunk("auth/register", async (values) => {
    const response = await axios.post("/users/signup", values);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
    return response.data
})

export const logIn = createAsyncThunk("auth/login", async (values) => {
    const response = await axios.post("/users/login", values);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
    return response.data
})

export const logOut = createAsyncThunk("auth/logout", async () => {
    
})