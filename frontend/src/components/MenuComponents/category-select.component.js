import React, { useState } from "react";

const CategorySelect = ({ onChange }) => {
  const [category, setCategory] = useState("6231da8ecece324534b292da");

  const handleCategoryChange = (e) => {
    onChange(e);
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
              { label: "Food", value: "6231da8ecece324534b292da" },
              {
                label: "Swallow",

                value: "6231da8ecece324534b292db",
              },
              {
                label: "Snacks",

                value: "6231da8ecece324534b292dc",
              },
              {
                label: "Dessert",

                value: "6231da8ecece324534b292dd",
              },
              {
                label: "Drinks",

                value: "6231da8ecece324534b292de",
              },
            ]}
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      <p className="dropdown-text">
        You have selected this category!
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
