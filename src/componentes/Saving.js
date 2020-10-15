import React from "react";

function Saving(propiedades) {
  return (
    <li className="saving">
      <div>
        <h4>{propiedades.name}</h4>
        <small>
          Total:{" "}
          <b>
            ${propiedades.totalSaved}{" "}
            {propiedades.target ? "/ " + propiedades.target : null}
          </b>
        </small>
      </div>
      <div className="bottom-saving-items">
        <input
          className="saving-input"
          type="number"
          placeholder="Entrada o salida"
        />
        <button className="secondary-btn">OK</button>
      </div>
    </li>
  );
}

export default Saving;
