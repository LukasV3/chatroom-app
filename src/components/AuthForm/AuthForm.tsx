import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

interface Props {
  type: "Login" | "Sign Up";
  onSubmit: ({ email, password }: { email: string; password: string }) => {};
}

const AuthForm = ({ type, onSubmit }: Props) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setErrors] = useState(null);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.type]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(null);
    console.log(`formValues`, formValues);
    try {
      await onSubmit(formValues);
    } catch (error) {
      setErrors(error.message);
    }
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
          value={formValues.email}
          onChange={onInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="authform__form--password"
          value={formValues.password}
          onChange={onInputChange}
        />
        {error ? <p>{error}</p> : null}
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
