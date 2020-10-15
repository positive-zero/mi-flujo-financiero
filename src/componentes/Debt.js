import React from "react";

function Deuda(propiedades) {
  return (
    <li className="debt">
      <div>
        <div>
          {propiedades.person} - ${propiedades.debt}
        </div>
        <small>{propiedades.date}</small>
      </div>

      <button className="secondary-btn">Saldar</button>
    </li>
  );
}

export default Deuda;
