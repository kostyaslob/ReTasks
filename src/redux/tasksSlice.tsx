import { createAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const addTask = createAction("tasks/addTask");
export const deleteTask = createAction("tasks/deleteTask");
export const toggleCompleted = createAction("tasks/toggleCompleted");

const initialState: RootState = {
  tasks: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },
};

export default function tasksReducer (state: RootState = initialState.tasks, action: { type: string }): RootState {
  switch (action.type) {
    case "tasks/addTask": {
      return {
        ...state,
        tasks: {
          items: [...state.tasks.items, action.payload]
        }
      }
    }
    case "tasks/deleteTask": {
      return {
        ...state,
        tasks: {
          items: state.tasks.items.filter((task) => task.id !== action.payload)
        }
      }
    }
    case "tasks/toggleCompleted": {
      return {
        ...state,
        tasks: {
          items: state.tasks.items.map((task) => {
            if (task.id !== action.payload) {
              return task
            }
            return {
              ...task,
              completed: !task.completed
            }
          })
        }
      }
    }  
    default:
      return state;
  };
}