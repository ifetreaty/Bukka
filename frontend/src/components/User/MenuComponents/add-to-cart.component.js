import React, { useState } from "react";
// import "../../App.css";
import Modal from "./added-to-cart-modal.component";

const SelectMeal = ({ mealId }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className="meal-card-button" onClick={() => setIsOpen(true)}>
        <span className="meal-card-link">Add to Cart</span>
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} mealId={mealId} />}
    </main>
  );
};

export default SelectMeal;
