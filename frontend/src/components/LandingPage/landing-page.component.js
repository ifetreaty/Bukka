import React from "react";
import { NavLink } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import brandLogo from "../../assets/brand/new-logo-2-removebg-preview.png";
import carouselOne from "../../assets/brand/bukka-landing-3.jpg";
import carouselTwo from "../../assets/brand/bukka-landing-7.jpg";
import carouselThree from "../../assets/brand/bukka-landing-8.jpg";
import carouselFour from "../../assets/brand/bukka-landing-11.jpg";
import carouselFive from "../../assets/brand/bukka-landing-10.jpg";
import Button from "./buttons";
import LandingScreenTwo from "./screen-2.component";

import "../../App.css";
import LandingScreenThree from "./screen-3.component";

const handleDragStart = (e) => e.preventDefault();

const LandingPage = () => {
  return (
    <div className="landing-background">
      <nav>
        <img src={brandLogo} className="brand-logo" alt="" />
        <div className="NavMenu">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/today-menu" className="nav-link">
            Today
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Cart
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Get Started
          </NavLink>
        </div>
      </nav>
      <div className="landing-page">
        <div className="landing-page-text">
          <p className="landing-page-text-main">
            Bringing the best meals <br />
            to your taste buds
          </p>
          <p className="landing-page-text-sub">
            Get freshly prepared meals from Bukka and have them <br />
            delivered directly to your doorstep.
          </p>
          <Button />
        </div>
        <AliceCarousel
          autoPlay
          autoPlayInterval="1000"
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 1,
            },
          }}
        >
          <img
            src={carouselOne}
            onDragStart={handleDragStart}
            className="sliderimg" alt=""
          />
          <img
            src={carouselTwo}
            onDragStart={handleDragStart}
            className="sliderimg" alt=""
          />
          <img
            src={carouselThree}
            onDragStart={handleDragStart}
            className="sliderimg" alt=""
          />
          <img
            src={carouselFour}
            onDragStart={handleDragStart}
            className="sliderimg" alt=""
          />
          <img
            src={carouselFive}
            onDragStart={handleDragStart}
            className="sliderimg" alt=""
          />
        </AliceCarousel>
      </div>
      <LandingScreenTwo />
      <LandingScreenThree />
    </div>
  );
};

export default LandingPage;
