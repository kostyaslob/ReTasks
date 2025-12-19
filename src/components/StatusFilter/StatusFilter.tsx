import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import css from "./StatusFilter.module.css";
import type { RootState } from "../../redux/store";
import { setStatusFilter } from "../../redux/actions";

export default function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter))

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")}>All</Button>
      <Button onClick={() => handleFilterChange("active")}>Active</Button>
      <Button onClick={() => handleFilterChange("completed")}>Completed</Button>
    </div>
  );
}
