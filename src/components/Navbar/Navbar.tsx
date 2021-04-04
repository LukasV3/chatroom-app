import React from "react";
import "./styles.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">
        Chatroom
        <i className="fab fa-rocketchat"></i>
      </h1>

      <div className="navbar__links--icon">
        <i className="fas fa-bars"></i>
      </div>

      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/login" className="navbar__link">
            Login
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/signup" className="navbar__link">
            SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
