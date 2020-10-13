import React from "react";

function Saving(propiedades) {
  return (
    <li class="saving">
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
      <div class="bottom-saving-items">
        <input
          class="saving-input"
          type="number"
          placeholder="Entrada o salida"
        />
        <button class="secondary-btn">OK</button>
      </div>
    </li>
  );
}

export default Saving;
