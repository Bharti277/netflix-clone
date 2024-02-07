import React from "react";
import Netflix from "../assets/netflix.jpg";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img src={Netflix} alt="Netflix" />
    </div>
  );
};

export default Nav;
