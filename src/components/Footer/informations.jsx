import React from "react";

const Informations = ({ title, informations }) => {
  return (
    <div className="footer-section">
      <h3>{title}</h3>
      <ul>
        {informations.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Informations;
