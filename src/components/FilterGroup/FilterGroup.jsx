import React from "react";
import "./FilterGroup.css";

function FilterGroup({ title, inputType, options, onChange }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>
      {options.map((option) => (
        <div key={option.value} className="filter-option">
          <input
            type={inputType}
            id={option.value}
            name={title}
            value={option.value}
            onChange={onChange}
          />
          <label htmlFor={option.value}>{option.text}</label>
        </div>
      ))}
    </div>
  );
}

export default FilterGroup;
