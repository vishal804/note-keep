import React from "react";
import "./sideNavbar.css";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <div class="aside" id="sidebar">
        <div class="sidenav">
          <ul class="list-subheading">
            <li>
              <p className="flex flex-justify-center">
                <Link to="/homepage">
                  <i class="icon-style fas fa-home"></i>Home
                </Link>
              </p>
            </li>
            <li>
              <p className="flex flex-justify-center">
                <Link to="/homepage">
                  <i class="icon-style fas fa-tag"></i>Labels
                </Link>
              </p>
            </li>
            <li>
              <p className="flex flex-justify-center">
                <Link to="/homepage">
                  <i class="icon-style fas fa-archive"></i>Archive
                </Link>
              </p>
            </li>
            <li>
              <p className="flex flex-justify-center">
                <Link to="/trash">
                  <i class="icon-style fas fa-trash"></i>Trash
                </Link>
              </p>
            </li>
            <li>
              <p className="flex flex-justify-center">
                <Link to="/homepage">
                  <i class="icon-style fas fa-user"></i>Profile
                </Link>
              </p>
            </li>
            <li>
              <button class="btn">Create New Note</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { SideNavbar };
