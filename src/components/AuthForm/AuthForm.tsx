import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

interface Props {
  type: "Login" | "Sign Up";
}

const AuthForm = ({ type }: Props) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  // const [errors, setErrors] = useState({});

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.type]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`formValues`, formValues);
  };

  return (
    <div className="authform">
      <h1 className="authform__title">
        {type} to Chatroom <i className="fab fa-rocketchat"></i>
      </h1>
      <h3 className="authform__description">
        Fill in the form below to {type === "Login" ? "login to your " : "create an "}
        account.
      </h3>
      <form onSubmit={handleSubmit} className="authform__form">
        <input
          type="email"
          autoFocus
          placeholder="Email"
          className="authform__form--email"
          onChange={onInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="authform__form--password"
          onChange={onInputChange}
        />
        <button className="btn btn--primary authform__form--btn">{type}</button>
      </form>

      {type === "Login" ? (
        <Link to="/signup">Don't have an account?</Link>
      ) : (
        <Link to="/login">Already have an account?</Link>
      )}
    </div>
  );
};

export default AuthForm;
