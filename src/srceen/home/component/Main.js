import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/kayna_maid_bg.png)`,
    backgroundRepeat: "no-repeat",
    height: "120vh",
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div className="container-main-home" style={backgroundImage}>
      <div className="main-col">
        <div className="main-p-1">
          <h2 class="logo">
            Intro<span>duction</span>
          </h2>
        </div>
        <div class="main-p-2">
          <h4>Nice to meet you, Hello</h4>
          <h1>
            My name is <span>Kayna</span>
          </h1>
          <h3>I'am a Ghoul :D.</h3>
          <div className="main-p-3">
            <Link to="https://www.youtube.com/@KaynaVtuberTH" className="btn-youtube" target="_blank">
              Youtube
            </Link>
            <Link to="https://www.tiktok.com/@kayna_channel" className="btn-tiktik" target="_blank">
              Tiktok
            </Link>
            <Link to="https://www.facebook.com/KaynaVTB" className="btn-facebook" target="_blank">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
