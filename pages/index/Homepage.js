import React from "react";

import HeroSection from "../components/HeroSection";
import ProfileSection from "../components/ProfileSection";
import FooterSection from "../components/FooterSection";


function Homepage() {
  return (
    <div className="container-fluid">
      <HeroSection />
      <ProfileSection />
      <FooterSection />
     
      
    </div>
  );
}

export default Homepage;
