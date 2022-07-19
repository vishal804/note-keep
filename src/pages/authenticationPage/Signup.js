import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import { Link, useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../component";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const signupHandler = async (values) => {
    try {
      const response = await axios.post("/api/auth/signup", values);
      if (response.status === 201) {
        localStorage.setItem("userAuthToken", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        authDispatch({
          type: "SIGNUP",
          payload: {
            user: response.data.createdUser,
            token: response.data.encodedToken,
          },
        });
        navigate("/homepage");
        SuccessToast("Login successful");
      }
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
            signupHandler(values);
          }}
          initialValues={{
            confirmPassword: "",
            firstName: "",
            email: "",
            password: "",
            acceptTerms: false,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.firstName.trim()) {
              errors.firstName = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password.trim()) {
              errors.password = "Required";
            }
            if (!values.confirmPassword.trim()) {
              errors.confirmPassword = "Required";
            }

            if (values.password !== values.confirmPassword) {
              errors.confirmPassword =
                "Password and confirm password doesn't match";
            }
            if (values.acceptTerms === false) {
              errors.acceptTerms = "Accept Terms & Conditions is required";
            }
            return errors;
          }}
        >
          {() => (
            <Form className="form">
              <div className="login-heading">SIGN UP</div>

              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  className="input"
                  type="text"
                  placeholder="Enter Name"
                  name="firstName"
                />
                <ErrorMessage
                  className="error-message"
                  name="firstName"
                  component="div"
                />
              </div>

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
                    id="show-create-password"
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

              <div>
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="show-hide-password">
                  <Field
                    id="confirm-password"
                    className="input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    name="confirmPassword"
                  />
                  <div
                    className="show-password"
                    id="show-create-password"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    show
                  </div>
                  <ErrorMessage
                    className="error-message"
                    name="confirmPassword"
                    component="div"
                  />
                </div>

                <div className="login-store flex flex-space-between">
                  <label htmlFor="acceptTerms">
                    <Field type="checkbox" name="acceptTerms" />I accept all
                    terms & conditions
                    <ErrorMessage
                      className="error-message"
                      name="acceptTerms"
                      component="div"
                    />
                  </label>
                </div>
              </div>

              <div className="form-btn">
                <button className="btn btn-primary btn-lg" type="submit">
                  Create New Account
                </button>
              </div>

              <div className="create-account flex flex-center">
                <Link to="/signin">
                  <p>Already have an account? Login here</p>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export { Signup };
