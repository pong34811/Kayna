import React from "react";
import "./Main.css";

function Main() {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/kayna_maid_bg.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 25%",
    backgroundSize: "cover",
  };

  return (
    <div className="container-main-home" style={backgroundImage}>
      <div className="main-col">
        <div className="main-p-1">
          <span>MY NAME IS</span>
        </div>

        {/* <div className='main-p-2'>
          <span>K</span>
          <span>A</span>
          <span>Y</span>
          <span>N</span>
          <span>A</span>
        </div> */}
        <div className="main-p-2">
          <span>KAYNA</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
