import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container-main-about">
      <div className="about-col">
        <img src="vtuber.png" alt="vtuber-kayna" />
        <div class="about-text">
          <h2>About Me</h2>
          <h5>
            <span>Editor</span>
          </h5>
          <p>
            ✨ สวัสดีค่ะ! เคนะเองค่ะ
            เมดน้อยสุดน่ารักที่พร้อมมอบความสนุกและบริการสุดพิเศษเพื่อคุณ 💖
            ไม่ว่าจะเป็นการเล่นเกมหรือคอนเทนต์ที่หลากหลาย
            เคนะพร้อมจะทำให้ทุกคนได้ประสบการณ์ที่ดีที่สุด!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
