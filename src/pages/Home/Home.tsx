import React from "react";
import "./styles.scss";

import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar authenticated={false} />
      <section className="home">
        <div className="home__content">
          <h1 className="home__title">
            Welcome to Chatroom <i className="fab fa-rocketchat"></i>
          </h1>

          <h3 className="home__description">
            A great place to share your thoughts with friends
          </h3>

          <div className="home__buttons">
            <Link to="/signup" className="btn btn--primary">
              Create New Account
            </Link>
            <Link to="/login" className="btn btn--secondary">
              Login to Your Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
