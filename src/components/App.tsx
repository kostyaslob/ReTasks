import Layout from "./Layout/Layout";
import { useEffect } from "react";
import { fetchTasks } from "../redux/operations";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.tasks.isLoading);
  const error = useAppSelector((state) => state.tasks.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </Header>
    </Layout>
  );
}
