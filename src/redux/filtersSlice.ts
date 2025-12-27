import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { StatusFilter } from "../types/task";

interface FilterState {
  status: StatusFilter;
}

const initialState: FilterState = {
  status: "all"
}

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<StatusFilter>) {
          state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;
export default slice.reducer;
