import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import SignInBody from "../../components/SignInBody/SignInBody";

function SignIn() {
  return (
    <div>
      <Navbar showSignInButton={false} />
      <SignInBody />
    </div>
  );
}

export default SignIn;
