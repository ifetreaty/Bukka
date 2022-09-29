import React from "react";
import SearchBox from "../ComponentParts/SearchBox";
import SearchButton from "../ComponentParts/SearchButton";
import foodIcon from "../../assets/burger.png";
import orderIcon from "../../assets/order-food-icon-7.jpeg";
import deliveryIcon from "../../assets/delivery.png";

const LandingScreenTwo = () => {
  return (
    <div className="landing-screen-collection">
      <p className="landing-screen-collection-header">
        ORDER DELIVERY AND COLLECTION
      </p>
      <p className="landing-screen-collection-text">
        Bukka offers you numerous options. You can place an order and have it
        delivered to you within 20 minutes. If you'd also prefer to collect, you
        can come to our location and pick up your meal.
      </p>
      <hr className="hr-collection-screen"></hr>
      <div className="landing-screen-search">
        <SearchBox />
        <SearchButton />
      </div>
      <div className="landing-screen-delivery-process">
        <div className="delivery-process-icons">
          <img src={foodIcon} className="delivery-process-icon" alt="" />
          <p>Select Food</p>
        </div>
        <div className="delivery-process-icons">
          <img src={orderIcon} className="delivery-process-icon" alt="" />
          <p>Order Food</p>
        </div>
        <div className="delivery-process-icons">
          <img src={deliveryIcon} className="delivery-process-icon" alt="" />
          <p>Delivery or Collection</p>
        </div>
      </div>
      <div className="broken-arrows">
        <div className="content">
          <div className="arrow">
            <div className="curve"></div>
            <div className="point"></div>
          </div>
        </div>
        <div className="content-2">
          <div className="arrow-2">
            <div className="curve-2"></div>
            <div className="point-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreenTwo;
