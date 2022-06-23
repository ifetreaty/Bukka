import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/userContext";
import backgroundImage from "../../assets/brand/new_bukka_tag-removebg.png";
import brandLogo from "../../assets/brand/new-logo-2-removebg-preview.png";
import landingImage from "../../assets/brand/amala_lp-removebg-preview.png";
import Button from "./buttons";

import "../../App.css";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="background">
      <nav>
        <img src={brandLogo} className="brand-logo" />
        <div className="NavMenu">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/today-menu" className="nav-link">
            Today
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Pricing
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Get Started
          </NavLink>
        </div>
      </nav>
      <div className="landing-page">
        <div className="landing-page-text">
          <p className="landing-page-text-main">Bringing the best meals <br />to your taste buds</p>
          <p className="landing-page-text-sub">Get freshly prepared meals from Bukka and have them <br />delivered directly to your doorstep.</p>
          {/* <button className="landing-page-button"><span>Order Now</span></button>
          <button className="landing-page-button"><span>View Menu</span></button> */}
          <Button />
        </div>
        <div>
          <img src={landingImage} className="landing-page-image" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
