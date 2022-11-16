import React from "react";
function ShoppingInfoTab() {
  return (
    <div className="shopping-info-tab">
      <div className="shopping-address">
        <div className="shopping-address-title">Shopping Address</div>
        <div className="shopping-address-form">
          <input type="text" placeholder="COUNTRY" />
          <input type="text" placeholder="CITY" />
          <input type="text" placeholder="STATE/ REGION/ PROVINCE" />
          <input type="text" placeholder="ZIP CODE" />
          <input type="text" placeholder="ADDRESS" />
        </div>
      </div>
      <div className="shopping-contact-info">
        <div className="shopping-contact-info-title">Contact Information</div>
        <div className="shopping-contact-info-form">
          <input type="text" placeholder="FIRST NAME" />
          <input type="text" placeholder="LAST NAME" />
          <input type="text" placeholder="EMAIL" />
          <input type="text" placeholder="PHONE NUMBER" />
        </div>
      </div>
    </div>
  );
}
export default ShoppingInfoTab;
