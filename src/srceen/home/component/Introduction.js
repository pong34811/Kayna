import React from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";
function Main() {
  const isMobile = window.innerWidth <= 768;

  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/kayna_maid_bg.png)`,
    backgroundPosition: isMobile ? "center" : "25% 50%", // เปลี่ยนตำแหน่งตามขนาดหน้าจอ
  };

  return (
    <div className="container-main-home" style={backgroundImage}>
      <div className="main-col">
        <div className="h2-introduction">
          <h2>
            Intro<span>duction</span>
          </h2>
        </div>
        <div className="h4-nice-to-meet-you">
          <h4>Nice to meet you, Hello</h4>
          <h1>
            My name is <span>Kayna</span>
          </h1>
          <h3>I'am Vtuber From Thailand</h3>
          <div className="social-media">
            <Link
              to={"https://www.youtube.com/@KaynaVtuberTH"}
              className="btn-youtube"
              target="_blank"
            >
              Youtube
            </Link>
            <Link
              to={"https://www.tiktok.com/@kayna_channel"}
              className="btn-tiktik"
              target="_blank"
            >
              Tiktok
            </Link>
            <Link
              to={"https://www.facebook.com/KaynaVTB"}
              className="btn-facebook"
              target="_blank"
            >
              Facebook
            </Link>
          </div>
        </div>
        <div className="status-youtube">
          <div className="youtube-follow">
            <h2>Follow</h2>
            <span>2000</span>
          </div>
          <div className="youtube-video">
            <h2>Video</h2>
            <span>500</span>
          </div>
          <div className="youtube-view">
            <h2>View</h2>
            <span>10000000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
