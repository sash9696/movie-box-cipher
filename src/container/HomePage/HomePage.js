import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";

function HomePage() {
  return (
    <div>
      <Navbar showSignInButton={false} logout={true} />
      <Banner />
    </div>
  );
}

export default HomePage;
