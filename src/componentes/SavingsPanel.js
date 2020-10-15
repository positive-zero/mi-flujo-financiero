import React from "react";
import Saving from "./Saving";

function SavingsPanel() {
  return (
    <section>
      <h2>Alcancías</h2>
      <div className="column-controls">
        <input type="text" placeholder="Nombre" />
        <input type="number" placeholder="Meta (opcional)" />
        <button className="secondary-btn">Listo</button>
      </div>
      <ul>
        <Saving name="Fondo de emergencias" totalSaved={235555} />
        <Saving name="Macbook Air" totalSaved={100} target={22000} />
      </ul>
    </section>
  );
}

export default SavingsPanel;
