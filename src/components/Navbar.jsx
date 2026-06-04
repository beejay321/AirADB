import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";
import websiteLogo from '../assets/website-logo.png';
import SearchBar from './SearchBar';


function Navbar() {
  return (
    <div>
      <div className="nav-div">
        <div className="logo">
            <img src={websiteLogo} alt="Website Logo" className="website-logo" />
      </div>
 <SearchBar />
        <div className="nav-tabs">
          <div>
            <img src="" alt="" />
            <span>Homes </span>
          </div>
          <span>Experiences</span>
          <span>Services</span>
        </div>
        <div className="nav-actions">
          <button className="nav-add-btn">
            <span>Add listing</span>
          </button>
          <button className="nav-icon-btn ">
            <span>
              <CiGlobe />
            </span>
          </button>
          <button className="nav-icon-btn">
            <span>
              <GiHamburgerMenu />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
