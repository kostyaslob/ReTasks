export interface Task {
    id: string | number;
    text: string;
    completed: boolean;
}

export type StatusFilter = "all" | "active" | "completed";