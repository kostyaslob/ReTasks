import css from "./StatusFilter.module.css";

export default function StatusFilter() {
    return (
      <div className={css.wrapper}>
        <button>All</button>
        <button>Active</button>
        <button>Complited</button>
      </div>
    );
}