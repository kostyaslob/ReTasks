import Button from "../Button/Button";
import css from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import type { StatusFilter } from "../../types/task";

export default function StatusFilter() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filters.status);

  const handleFilterChange = (filter: StatusFilter) => {
    dispatch(setStatusFilter(filter));
  };

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
