import React, { useState } from "react";
import "./ProductOptions.css";

function ProductOptions({ options, shape, radius, type }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${shape} ${
            selectedOption === option ? "selected" : ""
          }`}
          style={shape === "square" ? { borderRadius: radius } : {}}
          onClick={() => handleOptionClick(option)}
        >
          {type === "text" ? (
            <span className="option-text">{option}</span>
          ) : type === "color" ? (
            <div
              className="option-color"
              style={{ backgroundColor: option }}
            ></div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default ProductOptions;
