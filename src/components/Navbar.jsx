import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";
import websiteLogo from "../assets/website-logo.png";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-div">
        <div className="logo">
          <Link to="/">
            <img
              src={websiteLogo}
              alt="Website Logo"
              className="website-logo"
            />
          </Link>
        </div>
        <div className="nav-tabs">
          <Link to="/listings">
            <span>Homes</span>
          </Link>
          <Link to="/listings">
            <span>Experiences</span>
          </Link>
          <Link to="/listings">
            <span>Services</span>
          </Link>
        </div>
        <div className="nav-actions">
          <Link to="/host/new">
            <button className="nav-add-btn">
              <span>Add listing</span>
            </button>
          </Link>
          <button className="nav-icon-btn">
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
      <SearchBar />
    </div>
  );
}

export default Navbar;
