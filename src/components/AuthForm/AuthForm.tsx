import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

interface Props {
  type: "Login" | "Sign Up";
  onSubmit: ({
    name,
    email,
    password,
  }: {
    name?: string;
    email: string;
    password: string;
  }) => {};
}

const AuthForm = ({ type, onSubmit }: Props) => {
  const [formValues, setFormValues] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState<null | string>(null);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (type === "Sign Up" && formValues.name === "") {
      return setError("Please enter your name.");
    }

    try {
      await onSubmit(formValues);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="authform">
      <div className="authform__content">
        <h1 className="authform__title">
          {type} to Chatroom <i className="fab fa-rocketchat"></i>
        </h1>
        <h3 className="authform__description">
          Fill in the form below to {type === "Login" ? "login to your " : "create an "}
          account.
        </h3>
        <form onSubmit={handleSubmit} className="authform__form">
          {type === "Sign Up" && (
            <input
              type="text"
              name="name"
              autoFocus
              placeholder="Name"
              className="authform__form--name"
              value={formValues.name}
              onChange={onInputChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="authform__form--email"
            value={formValues.email}
            onChange={onInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="authform__form--password"
            value={formValues.password}
            onChange={onInputChange}
          />
          {error && (
            <div className="authform__form--error">
              <p>
                <i className="fas fa-exclamation-circle"></i>
                <span>{error}</span>
              </p>
            </div>
          )}
          <button className="btn btn--primary authform__form--btn">{type}</button>
        </form>

        <Link
          to={`/${type === "Login" ? "signup" : "login"}`}
          className="btn btn--secondary"
        >
          {type === "Login" ? "Don't" : "Already"} have an account?
        </Link>
      </div>
    </section>
  );
};

export default AuthForm;
