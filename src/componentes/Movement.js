import React from "react";

function Movement(propiedades) {
  return (
    <li
      className={"movement " + (propiedades.amount > 0 ? "income" : "expense")}
    >
      <span>
        {propiedades.name} - ${propiedades.amount}
      </span>
      <span
        className="delete-btn"
        onClick={() =>
          propiedades.onDelete({
            id: propiedades.id,
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
