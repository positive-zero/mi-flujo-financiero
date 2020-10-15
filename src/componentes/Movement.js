import React from "react";

function Movement(propiedades) {
  return (
    <li class={"movement " + (propiedades.amount > 0 ? "income" : "expense")}>
      <span>
        {propiedades.name} - ${propiedades.amount}
      </span>
      <span
        class="delete-btn"
        onClick={() =>
          propiedades.onDelete({
            name: propiedades.name,
            amount: propiedades.amount,
          })
        }
      >
        x
      </span>
    </li>
  );
}

export default Movement;
