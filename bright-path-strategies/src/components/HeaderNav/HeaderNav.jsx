import React from "react";
import "./HeaderNav.scss";


const HeaderNav = () => {
  return (
    <div className="headernav">
      {/* logo */}
      <div className="headernav-logo-container">
        <a href="/"><span className="headernav-logo">LOGO</span></a>
      </div>
      {/* list of links central */}
      <div className="headernav-links-container">
        <ul className="headernav-links">
          <a href="/about"><li>About</li></a>
          <a href="/approach"><li>Approach</li></a>
          <a href="/projects"><li>Projects</li></a>
          <a href="/collaborators"><li>Collaborators</li></a>
        </ul>
      </div>
    </div>
  )
};

export default HeaderNav;
