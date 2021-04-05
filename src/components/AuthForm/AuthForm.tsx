import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

interface Props {
  type: "Login" | "Sign Up";
}

const AuthForm = ({ type }: Props) => {
  return (
    <div className="authform">
      <h1 className="authform__title">{type} to Chatroom</h1>
      <h3 className="authform__description">
        Fill in the form below to {type === "Login" ? "login to your " : "create an "}
        account.
      </h3>
      <form className="authform__form">
        <input type="email" placeholder="Email" className="authform__form--email" />
        <input
          type="password"
          placeholder="Password"
          className="authform__form--password"
        />
        <button className="btn btn--primary">{type}</button>
      </form>

      {type === "Login" ? (
        <Link to="/signup">Don't have an acoount?</Link>
      ) : (
        <Link to="/login">Already have an account?</Link>
      )}
    </div>
  );
};

export default AuthForm;
