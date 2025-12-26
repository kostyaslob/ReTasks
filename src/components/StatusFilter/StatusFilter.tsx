import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import css from "./StatusFilter.module.css";
import type { RootState } from "../../redux/store";
import { setStatusFilter } from "../../redux/filtersSlice";

export default function StatusFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filters.status);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter))

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === "all"}
        onClick={() => handleFilterChange("all")}
      >
        All
      </Button>
      <Button
        selected={filter === "active"}
        onClick={() => handleFilterChange("active")}
      >
        Active
      </Button>
      <Button
        selected={filter === "completed"}
        onClick={() => handleFilterChange("completed")}
      >
        Completed
      </Button>
    </div>
  );
}
