import React from "react";
import "./styles.scss";

import AuthForm from "../../components/AuthForm/AuthForm";
import Navbar from "../../components/Navbar/Navbar";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <AuthForm type="Sign Up" />
    </>
  );
};

export default SignUp;
