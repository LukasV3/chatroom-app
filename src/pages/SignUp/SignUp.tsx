import React from "react";
import "./styles.scss";

import AuthForm from "../../components/AuthForm/AuthForm";
import Navbar from "../../components/Navbar/Navbar";

import { signup } from "../../helpers/auth";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <AuthForm type="Sign Up" onSubmit={signup} />
    </>
  );
};

export default SignUp;
