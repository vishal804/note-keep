import React from "react";
import "./sideNavbar.css";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <div className="aside" id="sidebar">
        <div className="sidenav">
          <ul className="list-subheading">
            <li>
              <p className="flex flex-justify-center">
                <Link to="/homepage">
                  <i className="icon-style fas fa-home"></i>Home
                </Link>
              </p>
            </li>
            <li>
              <p className="flex flex-justify-center">
                <Link to="/homepage">
                  <i className="icon-style fas fa-tag"></i>Labels
                </Link>
              </p>
            </li>
            <li>
              <p className="flex flex-justify-center">
                <Link to="/homepage">
                  <i className="icon-style fas fa-archive"></i>Archive
                </Link>
              </p>
            </li>
            <li>
              <p className="flex flex-justify-center">
                <Link to="/trash">
                  <i className="icon-style fas fa-trash"></i>Trash
                </Link>
              </p>
            </li>
            <li>
              <p className="flex flex-justify-center">
                <Link to="/homepage">
                  <i className="icon-style fas fa-user"></i>Profile
                </Link>
              </p>
            </li>
            <li>
              <button className="btn">Create New Note</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { SideNavbar };
