import React from "react";
import { Link } from "react-router-dom";
import "./LandingPageContent.css";

function LandingPageContent() {
  return (
    <div className="landingpagecontent_container">
      <p className="landingpagecontent_title">
        Unlimited films, TV programmes and more.
      </p>
      <p className="landingpagecontent_subtitle">
        Watch from anywhere. Cancel at anytime
      </p>
      <p className="landingpagecontent_description">
        Ready to watch? Enter your email to create or restart your membership.{" "}
      </p>
      <div className="landingpagecontent_input">
        <input type="text" />
        <Link to="/sign-in">
          <button className="landingpagecontent_button">GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPageContent;
