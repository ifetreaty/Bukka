import React, { useState, useEffect } from "react";
import CartCard from "../cart-card.component";

function ShoppingCartTab() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(fetchCartItems);
  }, []);

  const fetchCartItems = () => {};
  return (
    <>
      <div className="shopping-cart-tab">
        <div className="shopping-cart-subtitle">
          You have 2 items in your order.
        </div>
        <div>
          <div className="shopping-cart-table-header">
            <div className="shopping-cart-table-header-item cart-name">
              Name
            </div>
            <div className="shopping-cart-table-header-item cart-price">
              Price
            </div>
            <div className="shopping-cart-table-header-item cart-qty">Qty.</div>
            <div className="shopping-cart-table-header-item cart-total">
              Total
            </div>
          </div>
          <div>
            <CartCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartTab;
