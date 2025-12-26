import { configureStore } from "@reduxjs/toolkit";
import type { Task, StatusFilter } from "../types/task.ts";
import tasksReducer from "./tasksSlice";
import filtersReducer from "./filtersSlice";

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
