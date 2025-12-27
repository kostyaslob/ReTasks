import css from "./TaskCounter.module.css";
import { useAppSelector } from "../../redux/hooks";
import type { Task } from "../../types/task";

export default function TaskCounter() {
  const tasks = useAppSelector((state) => state.tasks.items);

  const count = tasks.reduce(
    (acc: { active: number; completed: number }, task: Task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
    return (
      <div>
        <p className={css.text}>Active: {count.active}</p>
        <p className={css.text}>Completed: {count.completed}</p>
      </div>
    );
}
