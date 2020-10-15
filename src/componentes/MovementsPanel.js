import React from "react";
import Movement from "./Movement";

export const sum = (movements) =>
  movements.reduce((prev, curr) => prev + curr.amount, 0);

function MovementsPanel(props) {
  const incomes = props.movements.filter((item) => item.amount > 0);
  const expenses = props.movements.filter((item) => item.amount < 0);

  return (
    <section>
      <div className="movement-group">
        <h2>Ingresos</h2>
        <p>Total de ingresos: ${sum(incomes)}</p>
        <ul>
          {incomes.map((item) => (
            <Movement
              key={item.name}
              amount={item.amount}
              name={item.name}
              onDelete={props.onMovementDelete}
            />
          ))}
        </ul>
      </div>

      <div className="movement-group">
        <h2>Gastos</h2>
        <p>Total de gastos: ${sum(expenses)}</p>
        <ul>
          {expenses.map((item) => (
            <Movement
              key={item.name}
              amount={item.amount}
              name={item.name}
              onDelete={props.onMovementDelete}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MovementsPanel;
