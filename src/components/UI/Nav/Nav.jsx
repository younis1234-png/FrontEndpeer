import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="menu">
      <nav>
        <h3 classNamw="menu__logo">EXP|CON</h3>
        <ul>
          <h3 classNamw="menu__logo logo2">EXP|CON</h3>{" "}
          <div className="menu__container">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <li>WHAT IS IT</li>
          <li>PERKS</li>
          <li>PRICING</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
