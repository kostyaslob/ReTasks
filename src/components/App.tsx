import Layout from "./Layout/Layout";
// import { useEffect } from "react";
// import { fetchTasks } from "../redux/operations";
// import { useAppDispatch } from "../redux/hooks";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TasksPage from "../pages/TasksPage/TasksPage";

export default function App() {
  // const dispatch = useAppDispatch();
  // const isLoading = useAppSelector((state) => state.tasks.isLoading);
  // const error = useAppSelector((state) => state.tasks.error);

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Route>
    </Routes>
  );
}
