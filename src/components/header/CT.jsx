import React from "react";
import CV from "./../../assets/resume.pdf";
const CT = () => {
  return (
    <div className="ct">
      <a href={CV} download className="btn">
        Download
      </a>
      <a>Only testing kar rha hu</a>
      <a href="#contacts" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CT;
