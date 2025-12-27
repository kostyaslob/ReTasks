import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./operations";
import type { Task } from "../types/task";

interface TasksState {
  items: Task[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TasksState = {
    items: [],
    isLoading: false,
    error: null,
}

const handlePending = (state: TasksState) => {
  state.isLoading = true;
}

const handleRejected = (state: TasksState, action: PayloadAction<string | undefined>) => {
  state.isLoading = false;
  state.error = action.payload ?? null
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      }).addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((task) => task.id !== action.payload)
      }).addCase(deleteTask.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((task) => task.id === action.payload.id ? action.payload : task)
    }).addCase(toggleCompleted.rejected, handleRejected)
  },
});

export default tasksSlice.reducer;
