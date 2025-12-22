import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";
// import type { RootState } from "./store";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      })
  }
  reducers: {
    addTask: (state, action) => {
        state.items.push(action.payload)
    },
    deleteTask: (state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload)    
    },
    toggleCompleted: (state, action) => {
        for (const task of state.items) {
            if (task.id === action.payload) {
                task.completed = !task.completed;
                break
            }
        }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = slice.actions;

export default tasksSlice.reducer;
