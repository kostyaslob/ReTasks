import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../redux/operations";

export default function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.tasks.isLoading);
    const error = useSelector((state) => state.tasks.error);

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