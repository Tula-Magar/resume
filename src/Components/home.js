import React from "react";
import "../style.css";
import Profile from "../images/R-removebg-preview.png";

function Home() {
  return (
    <div className="Ap">
      <main className="introContainer">
        <div className="introContent">
          <h1 className="greeting">Hi, there!</h1>
          <h2 className="welcomeGreeting">Welcome to my portfolio website.</h2>
          <h1 className="myName">I am Tula Magar</h1>
          <h2 className="myBackground">
            I am a Full Stack Web Developer and a Computer Science Graduate.
          </h2>
        </div>
        <div className="myImage">
          <img className="profile" src={Profile} alt="profile" />
        </div>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
    </div>
  );
}

export default Home;
