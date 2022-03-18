import React, { useState } from "react";
import "../../App.css";
import Modal from "../MenuComponents/select-meal-modal.component";

const SelectMeal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className="meal-card-button" onClick={() => setIsOpen(true)}>
        <span className="meal-card-link">Select Meal</span>
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  );
};

export default SelectMeal;
