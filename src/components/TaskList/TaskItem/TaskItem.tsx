import { MdClose } from "react-icons/md";
import css from "./TaskItem.module.css";
import type { Task } from "../../../types/task";
import { deleteTask, toggleCompleted } from "../../../redux/operations";
import { useAppDispatch } from "../../../redux/hooks";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
}
