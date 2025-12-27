import type { FormEvent } from "react";
import Button from "../Button/Button";
import css from "./TaskForm.module.css";
import { addTask } from "../../redux/operations";
import { useAppDispatch } from "../../redux/hooks";

export default function TaskForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("text") as HTMLInputElement;
    if (!input.value.trim()) return;

    dispatch(addTask(input.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
}
