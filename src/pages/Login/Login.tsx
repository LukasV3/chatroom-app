import React from "react";

import AuthForm from "../../components/AuthForm/AuthForm";
import Navbar from "../../components/Navbar/Navbar";

import { login } from "../../helpers/auth";

const Login = () => {
  return (
    <>
      <Navbar authenticated={false} />
      <AuthForm type="Login" onSubmit={login} />
    </>
  );
};

export default Login;
