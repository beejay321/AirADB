import React from "react";

function Navbar() {
  return (
    <div>
      <div className="nav-div">
        <div className="logo">
          {/* <img src="../assets/hero.png" alt="logo" /> */}
          <span>Logo here</span>
        </div>
        <div className="nav-tabs">
          <span>Homes </span>
          <span>Experiences</span>
          <span>Services</span>
        </div>
        <div className="nav-actions">
          <span>Add listing</span>
          <button className="nav-btn "></button>
          <button className="nav-btn "></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
