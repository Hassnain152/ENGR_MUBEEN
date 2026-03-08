import React from "react";
import Profile from "./Profile";
import Aboutme from "./Aboutme";
import Footer from "./Footer";
import Edu from "./Edu";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <Profile />
        <Footer/>
        <Aboutme/>
        <Edu/>
      
      </div>
      
    </>
  );
}
