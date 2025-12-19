import css from "./TaskList.module.css";
import TaskItem from "./TaskItem/TaskItem"
import { useSelector } from "react-redux";
import type { Task, StatusFilter } from "../../types/task";
import type { RootState } from "../../redux/store";



const getVisibleTasks = (tasks: Task[], statusFilter: StatusFilter) => {
  switch (statusFilter) {
    case "active":
      return tasks.filter((task) => !task.completed);
    case "completed":
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks.items);
  const statusFilter = useSelector((state: RootState) => state.filters.status);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}
