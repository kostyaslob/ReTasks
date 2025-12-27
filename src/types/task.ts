export interface Task {
    id: string;
    text: string;
    completed: boolean;
}

export type StatusFilter = "all" | "active" | "completed";