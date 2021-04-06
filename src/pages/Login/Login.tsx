import React from "react";
import "./styles.scss";

import AuthForm from "../../components/AuthForm/AuthForm";
import Navbar from "../../components/Navbar/Navbar";

import { login } from "../../helpers/auth";

const Login = () => {
  return (
    <>
      <Navbar />
      <AuthForm type="Login" onSubmit={login} />
    </>
  );
};

export default Login;
