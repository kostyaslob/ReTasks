export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export type StatusFilter = "all" | "active" | "completed";