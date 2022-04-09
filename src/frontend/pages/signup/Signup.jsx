import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login/authForms.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../auth/firebase.js";
function Signup() {
  const [passwordVisibility, setPasswordVisibility] = useState("password");
  const [passwordVisibilityIcon, setPasswordVisibilityIcon] =
    useState("fas fa-eye-slash");
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const passwordVisibilityHandler = () => {
    if (passwordVisibility === "password") {
      setPasswordVisibility("text");
      setPasswordVisibilityIcon("fas fa-eye");
    } else {
      setPasswordVisibility("password");
      setPasswordVisibilityIcon("fas fa-eye-slash");
    }
  };

  const handleChange = (e) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const authentication = getAuth();
    createUserWithEmailAndPassword(
      authentication,
      userDetail.email,
      userDetail.password
    )
      .then((response) => {
        navigate("/");
        localStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.error("Email Already in Use");
        }
      });
  };
  return (
    <main className="signup__container">
      <div className="signup__div">
        <form className="form" onSubmit={(e) => handleSignup(e)}>
          <h2 className="form__name">Signup</h2>
          <div className="input__box">
            <label htmlFor="Email">
              Email address
              <input
                type="email"
                name="email"
                id="Email"
                className="input"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input__box">
            <label htmlFor="Password">
              Password
              <input
                type={passwordVisibility}
                id="password"
                className="input"
                name="password"
                required
                onChange={handleChange}
                autoComplete="on"
              />
              <span className="password__icon">
                <i
                  className={passwordVisibilityIcon}
                  onClick={passwordVisibilityHandler}
                ></i>
              </span>
            </label>
          </div>
          <div className="input__box input__TandC">
            <div>
              <input type="checkbox" id="TandC" />
              <label htmlFor="TandC"> I accept all Terms and Conditions</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary form-btn">
            Create New Account
          </button>
          <Link to="/login" className="auth__Links">
            Already have an Account
          </Link>
        </form>
      </div>
    </main>
  );
}

export { Signup };
