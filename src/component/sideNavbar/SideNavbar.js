import React, { useState } from "react";
import "./sideNavbar.css";
import { Link } from "react-router-dom";
import { useNote } from "../../context/note-context";

const SideNavbar = () => {
  const { noteState, noteDispatch } = useNote();

  const [createLabel, setCreateLabel] = useState("");
  const [labelBox, setLabelBox] = useState(false);

  const createNewLabel = () => {
    if (createLabel !== "") {
      noteDispatch({ type: "CREATE_LABEL", payload: createLabel });
      setCreateLabel("");
    }
  };

  return (
    <div
      className={`aside
    ${noteState.showNav === true ? "width-250" : "width-0"}
    `}
    >
      <div className="sidenav">
        <ul className="list-subheading">
          <li className="show">
            <p
              className="closebtn"
              onClick={() => noteDispatch({ type: "SHOWNAV", payload: false })}
            >
              <i className="fas fa-times"></i>
            </p>
          </li>
          <li>
            <p className="list-style flex">
              <Link to="/homepage">
                <i className="icon-style fas fa-home"></i>Home
              </Link>
            </p>
          </li>
          <li>
            <p className="list-style flex">
              <Link to="/archive">
                <i className="icon-style fas fa-archive"></i>Archive
              </Link>
            </p>
          </li>
          <li>
            <p className="list-style flex">
              <Link to="/trash">
                <i className="icon-style fas fa-trash"></i>Trash
              </Link>
            </p>
          </li>
          <li>
            <p
              className="list-style flex"
              onClick={() => setLabelBox(!labelBox)}
            >
              <i className="icon-style fas fa-tag"></i>Labels
            </p>
            <div
              className={`label-box ${labelBox ? "dispaly" : "dispaly-none"}`}
            >
              {noteState.labels.map((label) => (
                <p key={label} className="label-list-style">
                  {label}
                </p>
              ))}

              <div className="create-label-row">
                <input
                  className="label-input"
                  placeholder="Create label..."
                  value={createLabel}
                  onChange={(e) => setCreateLabel(e.target.value)}
                />
                <button className="label-btn" onClick={createNewLabel}>
                  Create
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { SideNavbar };
