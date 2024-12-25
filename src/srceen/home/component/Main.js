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
      <div className="container-main-home-text">
        <div className="">
          <div>
            <h2>
              Intro<span>duction</span>
            </h2>
          </div>
          <div>
            <h4>Nice to meet you, Hello</h4>
            <h1>
              My name is <span>Kayna</span>
            </h1>
            <h3>I'am a Ghoul :D.</h3>
          </div>
          <div>
            <a
              href="https://www.youtube.com/@KaynaVtuberTH"
              className="btn-youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.tiktok.com/@kayna_channel"
              className="btn-tiktik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiktok
            </a>
            <a
              href="https://www.facebook.com/KaynaVTB"
              className="btn-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className="">
            <div>
              <h2>Follow</h2>
              <span>2000</span>
            </div>
            <div>
              <h2>Video</h2>
              <span>500</span>
            </div>
            <div>
              <h2>View</h2>
              <span>10000000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
