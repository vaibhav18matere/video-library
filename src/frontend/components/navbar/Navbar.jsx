import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = localStorage.getItem("Auth Token");
    if (authToken) {
      setIsLoggedIn(true);
      navigate("/");
    }

    if (!authToken) {
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [navigate]);

  const handleAuthButtonClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("Auth Token");
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      navigate("/");
    }
  };
  return (
    <nav className="navigation__component">
      <div className="nav">
        <p className="toggles">
          <i className="fas fa-bars"> </i>
        </p>
        <Link className="nav__logo" to="/">
          <p className="brand-name">Fasal Video Library</p>
        </Link>

        <ul className="nav__right">
          <button
            className="btn btn-primary btn-main"
            onClick={handleAuthButtonClick}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };
