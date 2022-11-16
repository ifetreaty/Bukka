import React, { useState } from "react";
import PaymentMethodTab from "./CartTabs/PaymentMethodTab";
import ShoppingCartTab from "./CartTabs/ShoppingCartTab";
import ShoppingInfoTab from "./CartTabs/ShoppingInfoTab";
import CartTab from "./cart-tab";
import CartTabContent from "./cart-tab-content.component";

function ShoppingCart() {
  const [activeTab, setActiveTab] = useState("shopping-cart-tab");
  return (
    <>
      <div className="shopping-cart-container">
        <div>
          <h2 className="shopping-cart-title">Shopping Cart</h2>
        </div>
        <div className="cart-tab">
          <div className="circle">
            <CartTab
              id="shopping-cart-tab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <span>1</span>
              <div className="circle-text">Shopping Cart</div>
            </CartTab>
          </div>
          <div class="hr">
            <div class="line"></div>
          </div>
          <div className="circle">
            <CartTab
              id="shopping-info-tab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <span>2</span>
              <div className="circle-text">Shopping Info</div>
            </CartTab>
          </div>
          <div class="hr">
            <div class="line"></div>
          </div>
          <div className="circle">
            <CartTab
              id="payment-method-tab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <span>3</span>
              <div className="circle-text">Payment Method</div>
            </CartTab>
          </div>
        </div>
        <div className="cart-tab-content">
          <CartTabContent id="shopping-cart-tab" activeTab={activeTab}>
            <ShoppingCartTab />
          </CartTabContent>
          <CartTabContent id="shopping-info-tab" activeTab={activeTab}>
            <ShoppingInfoTab />
          </CartTabContent>
          <CartTabContent id="payment-method-tab" activeTab={activeTab}>
            <PaymentMethodTab />
          </CartTabContent>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
