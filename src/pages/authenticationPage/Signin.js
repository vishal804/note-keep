import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { ErrorToast, SuccessToast } from "../../component";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signin = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const guestLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: "steveroger@gmail.com",
        password: "steveroger",
      });
      localStorage.setItem("user", response.data.foundUser);
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

  const loginHandler = async (values) => {
    try {
      const response = await axios.post("/api/auth/login", values);
      localStorage.setItem("user", response.data.foundUser);
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
        <Formik
          className="form"
          onSubmit={(values) => {
            loginHandler(values);
          }}
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.password.trim()) {
              errors.password = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
        >
          <Form className="form">
            <div className="login-heading">Login</div>
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                className="input"
                type="text"
                placeholder="Enter Email"
                name="email"
              />
              <ErrorMessage
                className="error-message"
                name="email"
                component="div"
              />
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="show-hide-password">
                <Field
                  id="create-password"
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                />
                <div
                  className="show-password"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  show
                </div>
              </div>
              <ErrorMessage
                className="error-message"
                name="password"
                component="div"
              />
            </div>

            <div className="login-store flex flex-space-between">
              <label htmlFor="store">
                <input type="checkbox" />I accept all terms & conditions
              </label>
            </div>

            <div className="form-btn">
              <button className="btn btn-primary btn-lg" type="submit">
                Login
              </button>
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={guestLogin}
              type="button"
            >
              Guest Login
            </button>
            <div className="create-account flex flex-center">
              <Link to="/signup">
                <p>Don't have account? Create now</p>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export { Signin };
