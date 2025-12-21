import { configureStore } from "@reduxjs/toolkit";
import type { Task, StatusFilter } from "../types/task.ts";
import tasksReducer from "./tasksSlice.tsx";
import filtersReducer from "./filtersSlice.tsx";

export interface RootState {
  tasks: {
    items: Task[];
  }
  filters: {
    status: StatusFilter
  }
}  

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  }
});
