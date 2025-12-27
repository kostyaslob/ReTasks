import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Task } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk<
    Task[],
    void,
    {rejectValue: string}
>("tasks/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get<Task[]>("tasks");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message)
    }
})

export const addTask = createAsyncThunk<
    Task,
    string,
    {rejectValue: string}
>("tasks/addTask", async (text, thunkAPI) => {
    try {
        const response = await axios.post<Task>("/tasks", { text });
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message)
    }
})

export const deleteTask = createAsyncThunk <
    string,
    string,
    {rejectValue: string}
    >("tasks/deleteTask", async (taskId, thunkAPI) => {
    try {
        await axios.delete(`/tasks/${taskId}`);
        return taskId;
    } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message)
    }
})

export const toggleCompleted = createAsyncThunk <
    Task,
    Task,
    {rejectValue: string}
    >("tasks/togglCompleted", async (task, thunkAPI) => {
    try {
        const response = await axios.put<Task>(`/tasks/${task.id}`, { completed: !task.completed });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue((error as Error).message)
    }
})