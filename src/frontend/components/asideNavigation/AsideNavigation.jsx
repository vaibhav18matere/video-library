import React from "react";
import { Link } from "react-router-dom";
import "./asideNavigation.css";

function AsideNavigation() {
  return (
    <aside className="aside__navigation">
      <div className="links__container">
        <Link to="/" className="navigation__link">
          <i className="fas fa-home"></i>Home
        </Link>
        <Link to="/playlist" className="navigation__link">
          <i className="fas fa-play-circle"></i>PlayList
        </Link>
      </div>
    </aside>
  );
}

export { AsideNavigation };
