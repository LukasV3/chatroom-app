import React from "react";

import AuthForm from "../../components/AuthForm/AuthForm";
import Navbar from "../../components/Navbar/Navbar";

import { signup } from "../../helpers/auth";

const SignUp = () => {
  return (
    <>
      <Navbar authenticated={false} />
      <AuthForm type="Sign Up" onSubmit={signup} />
    </>
  );
};

export default SignUp;
