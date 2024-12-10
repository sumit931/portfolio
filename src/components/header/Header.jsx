import React from "react";
import meImage from "../../assets/me.jpeg";
import "./header.css";
import CT from "./CT";
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Sumit Negi</h1>
        <h5 className="text-light">Software Engineer (Backend-Developer)</h5>
        <div className="me">
          <img src={meImage} alt="me"></img>
        </div>
        <CT />
      </div>
    </header>
  );
};

export default Header;
