import { useDispatch } from "react-redux";
import AppBar from "../../components/AppBar/AppBar";
import TaskForm  from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { fetchTasks } from "../../redux/operations";

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchTasks());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <title>Your tasks</title>
      <AppBar />
      <TaskForm />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <TaskList />
    </>
  );
}
