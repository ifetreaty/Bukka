import React, { useState } from "react";

const CategorySelect = () => {
  const [category, setCategory] = React.useState("Food");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="dropdown-select">
        <div>
          <h4 className="dropdown-select-title">Choose Category:</h4>
        </div>
        <div>
          <Dropdown
            options={[
              { label: "Food", value: "Food" },
              { label: "Swallow", value: "Swallow" },
              { label: "Snacks", value: "Snacks" },
              { label: "Dessert", value: "Dessert" },
              { label: "Drinks", value: "Drinks" },
            ]}
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      <p className="dropdown-text">
        You have selected the {category} category!
      </p>
    </>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default CategorySelect;
