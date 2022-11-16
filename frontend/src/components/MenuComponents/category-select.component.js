import React from "react";

const CategorySelect = ({ onChange, categories, category }) => {
  const handleCategoryChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div className="dropdown-select">
        <div>
          <h4 className="dropdown-select-title">Choose Category:</h4>
        </div>
        <div>
          <Dropdown
            options={categories}
            value={category}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      <p className="dropdown-text">You have selected this category!</p>
    </>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default React.memo(CategorySelect);
