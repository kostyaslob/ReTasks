export interface Task {
    id: string;
    text: string;
    completed: boolean;
}

export type StatusFilter = "all" | "active" | "completed";

export interface User {
    name: string | null;
    email: string | null;
}