import React from "react";

import Introduction from "./component/Introduction";
import Header from "./component/Header";
import Footer from "./component/Footer";
import About from "./component/About";



function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
