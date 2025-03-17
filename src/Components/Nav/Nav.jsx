import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  let [click, setClick] = useState(false);
  let handelClick = () => {
    setClick(!click);
  };
  return (
    <div className="nav">
      <div className="logo">
        <Link className="logo anchor1">Galaxy</Link>
      </div>
      <div className={click ? "anchor active" : "anchor"}>
        <Link to="/" className="anchor1">
          Home
        </Link>
        <Link to="/pricing" className="anchor1">
          Pricing
        </Link>
        <Link to="/training" className="anchor1">
          Training
        </Link>
        <Link to="/contact" className="anchor1">
          Contact
        </Link>
      </div>
      <div class="hamburger">
        {click ? (
          <FaBars
            className="ham"
            style={{ color: "white", cursor: "pointer" }}
            size={25}
            onClick={handelClick}
          />
        ) : (
          <FaTimes
            style={{ color: "white", cursor: "pointer" }}
            size={25}
            onClick={handelClick}
          ></FaTimes>
        )}
      </div>
    </div>
  );
};

export default Nav;
