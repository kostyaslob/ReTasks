import AppBar from "../../components/AppBar/AppBar";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { TaskList } from "../../components/TaskList/TaskList";

export default function TasksPage() {
  return (
    <>
      <title>Your tasks</title>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </>
  );
}
