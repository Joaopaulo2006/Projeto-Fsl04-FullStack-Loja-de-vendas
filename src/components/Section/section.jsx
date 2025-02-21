import React from "react";
import "./Section.css"; // Estilos específicos para a Section

function Section({ title, titleAlign, children }) {
  return (
    <section className="section">
      <h2 className={`section-title ${titleAlign}`}>{title}</h2>
      <div className="section-content">
        {children} {/* Aqui vão os componentes passados como filhos */}
      </div>
    </section>
  );
}

export default Section;
