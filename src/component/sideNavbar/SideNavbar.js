import React, { useState } from "react";
import "./sideNavbar.css";
import { Link } from "react-router-dom";
import { useNote } from "../../context/note-context";

const SideNavbar = () => {
  const { noteState, noteDispatch } = useNote();

  const [createLabel, setCreateLabel] = useState("");

  const createNewLabel = () => {
    if (createLabel !== "") {
      noteDispatch({ type: "CREATE_LABEL", payload: createLabel });
      setCreateLabel("");
    }
  };

  return (
    <div className="aside" id="sidebar">
      <div className="sidenav">
        <ul className="list-subheading">
          <li>
            <p className="list-style flex flex-justify-center">
              <Link to="/homepage">
                <i className="icon-style fas fa-home"></i>Home
              </Link>
            </p>
          </li>
          <li>
            <p className="list-style flex flex-justify-center">
              <Link to="/archive">
                <i className="icon-style fas fa-archive"></i>Archive
              </Link>
            </p>
          </li>
          <li>
            <p className="list-style flex flex-justify-center">
              <Link to="/trash">
                <i className="icon-style fas fa-trash"></i>Trash
              </Link>
            </p>
          </li>
          <li>
            <p className="list-style flex flex-justify-center">
              <Link to="/homepage">
                <i className="icon-style fas fa-tag"></i>Labels
              </Link>
            </p>
            {noteState.labels.map((label) => (
              <p key={label} className="label-list-style">
                {label}
              </p>
            ))}
          </li>

          <div className="flex-row create-label-row">
            <input
              className="label-input"
              placeholder="create label..."
              value={createLabel}
              onChange={(e) => setCreateLabel(e.target.value)}
            />
            <button className="label-btn" onClick={createNewLabel}>
              Create New Label
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export { SideNavbar };
