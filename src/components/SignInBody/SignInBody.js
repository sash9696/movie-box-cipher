import React from "react";
import "./SignInBody.css";

function SignInBody() {
  return (
    <div className="signinbody_container">
      <div className="signinbody_form">
        <p className="signinbody_title">Sign In</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
        <button>Login as Guest User</button>
        <p className="signinbody_text">
          New to MovieApp? <span>SignUp Now.</span>
        </p>
      </div>
    </div>
  );
}

export default SignInBody;
