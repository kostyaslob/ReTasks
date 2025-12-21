import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "./store";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setStatusFilter } = slice.actions;

export default slice.reducer;
