import { MdClose } from "react-icons/md";
import css from "./TaskItem.module.css";
import type { Task } from "../../../types/task";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type="button">
        <MdClose size={24} />
      </button>
    </div>
  );
}
