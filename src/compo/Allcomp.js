import React from "react";
import Profile from "./Profile";
import Aboutme from "./Aboutme";
import Edu from "./Edu";
import Mydata from "./Mydata";
import ModernBoxes from "./ModernBoxes";
import Exprnce from "./Exprnce";
import Vavi from "./Vavi";
import Footer from "./Footer";





export default function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Vavi/>
      <Aboutme />
      <Edu />
      <Mydata />
      <ModernBoxes />
      <Exprnce />
      <Footer/>
      
      
    </div>
  );
}