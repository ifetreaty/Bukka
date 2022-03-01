import React, { useState } from "react";

const CategorySelect = () => {
  const [category, setCategory] = React.useState("Food");
  const [day, setDay] = React.useState("Sunday");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-select">
          <h4 className="dropdown-select-title">Category:</h4>
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

        <div className="dropdown-select">
          <h4 className="dropdown-select-title">Day:</h4>
          <Dropdown
            options={[
              { label: "Sunday", value: "Sunday" },
              { label: "Monday", value: "Monday" },
              { label: "Tuesday", value: "Tuesday" },
              { label: "Wednesday", value: "Wednesday" },
              { label: "Thursday", value: "Thursday" },
              { label: "Friday", value: "Friday" },
              { label: "Saturday", value: "Saturday" },
            ]}
            value={day}
            onChange={handleDayChange}
          />
        </div>
      </div>

      <p className="dropdown-text">
        You have selected the {category} category!
      </p>
      <p className="dropdown-text">For the {day} menu!</p>
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
