import { clsx } from "clsx";
import cn from "./Filter.module.css";
import { useCallback } from "react";

export const Filter = ({ filters, setFilters }) => {
  const setViewType = useCallback(
    (type) => () => {
      setFilters((prev) => ({ ...prev, view: type }));
    },
    [setFilters]
  );

  return (
    <div className={cn.container}>
      <h2>View</h2>
      <div className={cn.toggle}>
        <button
          onClick={setViewType("grid")}
          className={clsx(filters.view === "grid" && cn.selected)}
        >
          GRID
        </button>
        <button
          onClick={setViewType("list")}
          className={clsx(filters.view !== "grid" && cn.selected)}
        >
          LIST
        </button>
      </div>
    </div>
  );
};
