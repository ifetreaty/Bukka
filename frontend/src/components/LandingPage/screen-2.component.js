import React from "react";
import SearchBox from "../ComponentParts/SearchBox";
import SearchButton from "../ComponentParts/SearchButton";
import foodIcon from "../../assets/burger.png";
import orderIcon from "../../assets/order-food-icon-7.jpeg";
import deliveryIcon from "../../assets/delivery.png";

const LandingScreenTwo = () => {
  return (
    <div className="landing-screen-takeout">
      <p className="landing-screen-takeout-header">
        ORDER DELIVERY AND TAKEOUT
      </p>
      <p className="landing-screen-takeout-text">
        Bukka offers you numerous options. You can place an order and have it
        delivered to you within 20 minutes. If you'd also prefer the Take out
        option, you can come to our location and pick up your meal.
      </p>
      <hr className="hr-takeout-screen"></hr>
      <div className="landing-screen-search">
        <SearchBox />
        <SearchButton />
      </div>
      <div className="landing-screen-delivery-process">
        <div className="delivery-process-icons">
          <img src={foodIcon} className="delivery-process-icon" />
          <p>Select Food</p>
        </div>
        <div className="delivery-process-icons">
          <img src={orderIcon} className="delivery-process-icon" />
          <p>Order Food</p>
        </div>
        <div className="delivery-process-icons">
          <img src={deliveryIcon} className="delivery-process-icon" />
          <p>Delivery or Take Out</p>
        </div>
      </div>
      <div className="broken-arrows">
      <div class="content">
        <div class="arrow">
          <div class="curve"></div>
          <div class="point"></div>
        </div>
      </div>
      <div class="content-2">
        <div class="arrow-2">
          <div class="curve-2"></div>
          <div class="point-2"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingScreenTwo;
