import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { ErrorToast, SuccessToast } from "../../component";

const Signin = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const guestLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: "steveroger@gmail.com",
        password: "steveroger",
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "LOGIN",
        payload: {
          user: response.data.foundUser,
          token: response.data.encodedToken,
        },
      });
      navigate("/homepage");
      SuccessToast("Login successful");
    } catch (error) {
      ErrorToast("Invalid username and password", error);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: userInfo.email,
        password: userInfo.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "LOGIN",
        payload: {
          user: response.data.foundUser,
          token: response.data.encodedToken,
        },
      });
      navigate("/homepage");
      SuccessToast("Login successful");
    } catch (error) {
      ErrorToast("Invalid username and password", error);
    }
  };

  return (
    <>
      <div className="login-page flex flex-center">
        <form className="form" onSubmit={loginHandler}>
          <div className="login-heading">Login</div>

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={setUserInfo.email}
            onChange={(event) =>
              setUserInfo({ ...userInfo, email: event.target.value })
            }
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="show-hide-password">
            <input
              id="create-password"
              className="input"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={setUserInfo.password}
              onChange={(event) =>
                setUserInfo({ ...userInfo, password: event.target.value })
              }
            />
            <div className="show-password" id="show-create-password">
              show
            </div>
          </div>

          <div className="login-store flex flex-space-between">
            <label htmlFor="store">
              <input type="checkbox" />I accept all terms & conditions
            </label>
          </div>

          <div className="form-btn">
            <button className="btn btn-primary btn-lg">Login</button>
          </div>
          <button className="btn btn-primary btn-lg" onClick={guestLogin}>
            Guest Login
          </button>
          <div className="create-account flex flex-center">
            <Link to="/signup">
              <p>Don't have account? Create now</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export { Signin };
