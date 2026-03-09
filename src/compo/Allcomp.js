import React from "react";
import Profile from "./Profile";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Edu from "./Edu";
import Mydata from "./Mydata"
import ModernBoxes from "./ModernBoxes";
import Exprnce from "./Exprnce";
import Foooter from "./Foooter";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <Profile />
        <Footer/>
        <Aboutme/>
        <Edu/>
        <Mydata/>
        <ModernBoxes/>
        <Exprnce/>
        <Foooter/>
        
      
      </div>
      
    </>
  );
}
