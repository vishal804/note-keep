import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import "./auth.css";

const Signup = () => {
  const [error, setError] = useState("Nothing");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
  });

  const { authDispatch } = useAuth();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (
      userCredentials.password.length >= 9 &&
      userCredentials.password === userCredentials.confirmPassword
    ) {
      try {
        const response = await axios.post("/api/auth/signup", {
          email: userCredentials.email,
          password: userCredentials.password,
          firstName: userCredentials.firstName,
        });
        if (response.status === 201) {
          localStorage.setItem("userAuthToken", response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.createdUser)
          );
          authDispatch({
            type: "SIGNUP",
            payload: {
              user: response.data.createdUser,
              token: response.data.encodedToken,
            },
          });
          navigate("/");
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else if (userCredentials.password.length <= 9) {
      setError("Password required altest 9 Character");
    } else {
      setError("Password and Confirm Password does not match");
    }
  };

  return (
    <>
      <div className="login-page flex flex-center">
        <form className="form" onSubmit={signupHandler}>
          <div className="login-heading">SIGN UP</div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            value={userCredentials.firstName}
            onChange={(event) =>
              setUserCredentials({
                ...userCredentials,
                firstName: event.target.value,
              })
            }
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={userCredentials.email}
            onChange={(event) =>
              setUserCredentials({
                ...userCredentials,
                email: event.target.value,
              })
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
              value={userCredentials.password}
              onChange={(event) =>
                setUserCredentials({
                  ...userCredentials,
                  password: event.target.value,
                })
              }
            />
            <div className="show-password" id="show-create-password">
              show
            </div>
          </div>

          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <div className="show-hide-password">
            <input
              id="confirm-password"
              className="input"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={userCredentials.confirmPassword}
              onChange={(event) =>
                setUserCredentials({
                  ...userCredentials,
                  confirmPassword: event.target.value,
                })
              }
            />
            <div className="show-password" id="show-confirm-password">
              show
            </div>
          </div>
          <div>{error}</div>
          <div className="login-store flex flex-space-between">
            <label htmlFor="store">
              <input type="checkbox" />I accept all terms & conditions
            </label>
          </div>

          <div className="form-btn">
            <button className="btn btn-primary btn-lg">
              Create New Account
            </button>
          </div>
          <div className="create-account flex flex-center">
            <Link to="/signin">
              <p>Already have an account</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export { Signup };
