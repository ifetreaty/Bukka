import React from "react";

const CartCard = ({ image, name, description, price, quantity }) => {
  return (
    <div className="cart-card-flex">
      <div>
        <img src={image} alt="meal-card" className="meal-card-image" />
      </div>
      <div>
        <h5>{name}</h5>
        <p>{description}</p>
        <ul className="list-group">
          <li className="list-group-item price">
            &#8358;
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 5,
            }).format(price)}
          </li>
          <li>
            {quantity}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartCard;
