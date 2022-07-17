import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useNote } from "../../context/note-context";

const Header = () => {
  const { authState, authDispatch } = useAuth();
  const { noteDispatch } = useNote();

  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("userAuthToken");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  const loginHandler = () => {
    if (authState.token) {
      logoutHandler();
    }
  };

  return (
    <>
      <header className="navigationbar">
        <nav className="navbar box-shadow">
          <div className="left-navbar">
            <span
              class="show"
              onClick={() => noteDispatch({ type: "SHOWNAV", payload: true })}
            >
              <i class="fas fa-bars"></i>
            </span>
            <Link to="/homepage">
              <p className="logo">Note Keeper</p>
            </Link>
          </div>
          <ul className="right-navbar">
            <li>
              {authState.token ? (
                <Link to="/">
                  <button
                    className="no-show btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Logout
                  </button>
                  <p onClick={loginHandler}>
                    <i className="show fas fa-sign-out-alt fa-2x"></i>
                  </p>
                </Link>
              ) : (
                <Link to="/signin">
                  <button
                    className="no-show btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                  <p onClick={loginHandler}>
                    <i className="show fas fa-sign-in-alt fa-2x"></i>
                  </p>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
