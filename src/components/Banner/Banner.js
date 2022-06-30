import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          'url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")',
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1> Movie Name </h1>
        <div className="banner_buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          purus id augue bibendum, quis volutpat justo ultrices. Fusce eu nunc
          non ante aliquet aliquet sed ut dui. Mauris laoreet sem sit amet erat
          consequat, a auctor ipsum molestie. Vestibulum quis vehicula justo,
          sit amet venenatis tortor. Vestibulum sit amet ullamcorper magna.
          Pellentesque laoreet, felis sit amet semper eleifend, mauris neque
          imperdiet odio, a efficitur nunc quam ac libero.
        </h3>
      </div>
    </div>
  );
}

export default Banner;
