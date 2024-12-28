import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";

const Main = () => {
  const [channelData, setChannelData] = useState({
    subscriberCount: 0,
    videoCount: 0,
    viewCount: 0,
  });

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCC_P34t35REbiPzbHO_bifA&key=AIzaSyDcsfn7EkqklHYJwMS83-mfm7_O0uDHJAc"
    )
      .then((response) => response.json())
      .then((data) => {
        const { subscriberCount, videoCount, viewCount } = data.items[0].statistics;
        setChannelData({ subscriberCount, videoCount, viewCount });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/kayna_maid_bg.webp)`,
    height: "120vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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
            My name is Kayna
          </h1>
          <h3>I'am Vtuber From Thailand</h3>
          <div className="social-media">
            <Link
              href="https://www.youtube.com/@KaynaVtuberTH"
              className="btn-youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </Link>
            <Link
              href="https://www.tiktok.com/@kayna_channel"
              className="btn-tiktik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tiktok
            </Link>
            <Link
              href="https://www.facebook.com/KaynaVTB"
              className="btn-facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
          </div>
        </div>
        <div className="status-youtube">
          <div className="youtube-follow">
            <h2>Follow</h2>
            <span>{channelData.subscriberCount}</span>
          </div>
          <div className="youtube-video">
            <h2>Video</h2>
            <span>{channelData.videoCount}</span>
          </div>
          <div className="youtube-view">
            <h2>View</h2>
            <span>{channelData.viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;