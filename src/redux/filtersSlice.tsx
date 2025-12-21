import { createAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const setStatusFilter = createAction("filters/setStatusFilter");

const initialState: RootState = {
  filters: {
    status: "all",
  },
};

export default function  filtersReducer (state: RootState = initialState.filters, action: { type: string }): RootState {
  switch (action.type) {
      case "filters/setStatusFilter": 
      return {
        ...state,
        filters: {
          status: action.payload,
        }
      }      
    default:
      return state;
  };
}
