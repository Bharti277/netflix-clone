import React, { useEffect, useState } from "react";
import Netflix from "../assets/netflix.jpg";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img src={Netflix} alt="Netflix" />
    </div>
  );
};

export default Nav;
