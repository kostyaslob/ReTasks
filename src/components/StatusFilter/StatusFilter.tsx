import Button from "../Button/Button";
import css from "./StatusFilter.module.css";

export default function StatusFilter() {
    return (
      <div className={css.wrapper}>
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Complited</Button>
      </div>
    );
}