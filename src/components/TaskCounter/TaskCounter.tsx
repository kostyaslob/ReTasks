import css from "./TaskCounter.module.css";

export default function TaskCounter() {
    return (
      <div>
        <p className={css.text}>Active: 0</p>
        <p className={css.text}>Completed: 0</p>
      </div>
    );
}
