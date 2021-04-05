import React, { useState } from "react";
import "./styles.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <h1 className="navbar__logo">
          Chatroom
          <i className="fab fa-rocketchat"></i>
        </h1>

        <div className="navbar__links--icon" onClick={() => setClicked(!clicked)}>
          {clicked ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>

        <ul className={clicked ? "navbar__links links--active" : "navbar__links"}>
          <li className="navbar__item">
            <Link to="/login" className="navbar__link">
              Login
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/signup" className="navbar__link">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
