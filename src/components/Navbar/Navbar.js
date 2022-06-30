import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar({ showSignInButton, logout }) {
  const navigate = useNavigate();

  const goToSignInPage = () => {
    navigate("/sign-in");
  };
  return (
    <div className="navbar_container">
      <img
        className="navbar_logo"
        src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-blue-movie-video-tool-image_1229852.jpg"
        alt="Logo"
      />
      {/* <Link to="/sign-in">
        <button className="navbar_button">Sign In</button>
      </Link> */}
      {showSignInButton === false ? (
        " "
      ) : (
        <button className="navbar_button" onClick={goToSignInPage}>
          Sign In
        </button>
      )}

      {logout && (
        <p className="navbar_icon">
          <AccountCircleIcon />
        </p>
      )}
    </div>
  );
}

export default Navbar;
