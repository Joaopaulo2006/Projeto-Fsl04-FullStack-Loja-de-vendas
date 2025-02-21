import React from "react";

function FilterGroup({ title, inputType, options, onChange }) {
  return (
    <div className="filter-group">
      <div className="filter-title">{title}</div>
      <div className="filter-options">
        {options.map((option, index) => (
          <div key={index} className="filter-option">
            <input
              type={inputType} // 'checkbox' ou 'radio'
              value={option.value || option.text} // Usando 'value' se disponível
              id={option.value || option.text} // Atribuindo o id único
              onChange={onChange}
            />
            <label htmlFor={option.value || option.text}>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;
