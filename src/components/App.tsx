import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import { useEffect } from "react";
import { fetchTasks } from "../redux/operations";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function App() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.tasks.isLoading);
    const error = useAppSelector((state) => state.tasks.error);

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    return (
        <Layout>
            <AppBar />
            <TaskForm />
            {isLoading && !error && <b>Request in progress...</b>}
            <TaskList />
        </Layout>        
    )
}