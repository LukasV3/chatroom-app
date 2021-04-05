import React from "react";
import "./styles.scss";

import AuthForm from "../../components/AuthForm/AuthForm";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <AuthForm type="Login" />
    </>
  );
};

export default Login;
