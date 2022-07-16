import React from "react";
import "./filter.css";
import { useNote } from "../../context/note-context";

const Filter = () => {
  const { noteState, noteDispatch } = useNote();
  return (
    <>
      <div className="filter-container">
        <div>
          <p
            className="btn-reset"
            onClick={() => noteDispatch({ type: "CLEAR_FILTERS" })}
          >
            CLEAR ALL
          </p>
        </div>

        <div>
          <p className="filter-title">Sort By Poritory</p>
          <div className="radiobtn1">
            <input
              type="radio"
              name="sort-by-priority"
              // id="priority"
              checked={
                noteState.filters.sortByPriority === "LOW_TO_HIGH_PRIORITY"
              }
              onChange={() =>
                noteDispatch({
                  type: "SORT_BY_PRIORITY",
                  payload: "LOW_TO_HIGH_PRIORITY",
                })
              }
            />
            <label htmlFor="lowToHigh">Low to high</label>
          </div>
          <div className="radiobtn">
            <input
              type="radio"
              name="sort-by-priority"
              // id="priority"
              checked={
                noteState.filters.sortByPriority === "HIGH_TO_LOW_PRIORITY"
              }
              onChange={() =>
                noteDispatch({
                  type: "SORT_BY_PRIORITY",
                  payload: "HIGH_TO_LOW_PRIORITY",
                })
              }
            />
            <label htmlFor="hightolow">High to low</label>
          </div>
        </div>

        {/* <div style={{border: "1px solid Black", backgroundColor:"blue"}}> */}
        <div>
          <p className="filter-title">Sort By</p>
          <div className="radiobtn">
            <input
              type="radio"
              name="sortBy1"
              // id="sortBy"
              checked={noteState.filters.sortBy === "NEWEST_FIRST"}
              onChange={() =>
                noteDispatch({
                  type: "SORT_BY",
                  payload: "NEWEST_FIRST",
                })
              }
            />
            <label htmlFor="newestNote">Newest first</label>
          </div>
          <div className="radiobtn">
            <input
              type="radio"
              name="sortBy1"
              // id="sortBy"
              checked={noteState.filters.sortBy === "OLDEST_FIRST"}
              onChange={() =>
                noteDispatch({
                  type: "SORT_BY",
                  payload: "OLDEST_FIRST",
                })
              }
            />
            <label htmlFor="oldestNote">Oldest first</label>
          </div>
        </div>
      </div>
    </>
  );
};

export { Filter };
