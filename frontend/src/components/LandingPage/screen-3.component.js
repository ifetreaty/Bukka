import React from "react";
import BukkaLogo from "../../assets/bukka-landing-3-removebg-preview.png";

const LandingScreenThree = () => {
  return (
    <div className="landing-screen-container">
      <div className="landing-screen-about">
        <div className="landing-screen-about-text">
          <p className="landing-screen-about-header">
            ABOUT OUR RESTAURANT FOOD & DRINKS
          </p>
          <p className="landing-screen-about-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur placerat nulla, in suscipit erat sodales id. Nullam
            ultricies eu turpis at accumsan.
          </p>
          <hr className="hr-about-screen"></hr>
          <p className="landing-screen-about-subtext-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur placerat nulla, in suscipit erat sodales id. Nullam
            ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam efficitur placerat nulla, in
            suscipit erat sodales id. Nullam ultricies eu turpis at accumsan.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur placerat nulla, in suscipit erat sodales id. Nullam
            ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam efficitur placerat nulla, in
            suscipit erat sodales id. Nullam ultricies eu turpis at accumsan.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur placerat nulla, in suscipit erat sodales id. Nullam
            ultricies eu turpis at accumsan. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam efficitur placerat nulla, in
            suscipit erat sodales id.
          </p>
        </div>
        <div className="landing-screen-about-image">
          <img src={BukkaLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingScreenThree;
