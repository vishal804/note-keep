import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./header.css";

const Header = () => {
  const { authState, authDispatch } = useAuth();

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
      <header>
        <nav className="navbar box-shadow">
          <div className="left-navbar">
            <Link to="/">
              <p>Note Keeper</p>
            </Link>
          </div>
          <ul className="right-navbar">
            <li className="no-show">
              {authState.token ? (
                <Link to="/">
                  <button
                    className="btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to="/signin">
                  <button
                    className="btn btn-link btn-style"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
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
