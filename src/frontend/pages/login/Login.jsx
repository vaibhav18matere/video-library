import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./authForms.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { app } from "../../auth/firebase.js";
function Login() {
  const [passwordVisibility, setPasswordVisibility] = useState("password");
  const [passwordVisibilityIcon, setPasswordVisibilityIcon] =
    useState("fas fa-eye-slash");
  let navigate = useNavigate();

  const [userDetail, setUserDetail] = useState({
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

  const handleLogin = (e) => {
    e.preventDefault();
    const authentication = getAuth();

    signInWithEmailAndPassword(
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
        if (error.code === "auth/wrong-password") {
          console.error("Please check the Password");
        }
        if (error.code === "auth/user-not-found") {
          console.error("Please check the Email");
        }
      });
  };

  return (
    <div>
      <main className="signup__container">
        <div className="signup__div">
          <form className="form" onSubmit={(e) => handleLogin(e)}>
            <h2 className="form__name">Login</h2>
            <div className="input__box">
              <label htmlFor="Email">
                Email address
                <input
                  required
                  id="Email"
                  className="input"
                  placeholder="test@gmail.com"
                  name="email"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="input__box">
              <label htmlFor="Password">
                Password
                <input
                  type={passwordVisibility}
                  required
                  id="Password"
                  className="input"
                  placeholder="test@1234"
                  name="password"
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
                <input type="checkbox" id="remberMe" />
                <label htmlFor="remberMe"> Remember me</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary form-btn">
              Login
            </button>
            <Link to="/signup" className="auth__Links">
              Create New Account
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}

export { Login };
