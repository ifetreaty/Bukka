import React from "react";

const CartTabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="tab-content">{children}</div>
  ) : null;
};

export default CartTabContent;
