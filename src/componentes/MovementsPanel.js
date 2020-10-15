import React from "react";
import Movement from "./Movement";

export const sum = (movements) =>
  movements.reduce((prev, curr) => prev + curr.amount, 0);

function MovementsPanel(props) {
  const incomes = props.movements.filter((item) => item.amount > 0);
  const expenses = props.movements.filter((item) => item.amount < 0);

  return (
    <section>
      <div class="movement-group">
        <h2>Ingresos</h2>
        <p>Total de ingresos: ${sum(incomes)}</p>
        <ul>
          {incomes.map((item) => (
            <Movement amount={item.amount} name={item.concept} />
          ))}
        </ul>
      </div>

      <div class="movement-group">
        <h2>Gastos</h2>
        <p>Total de gastos: ${sum(expenses)}</p>
        <ul>
          {expenses.map((item) => (
            <Movement amount={item.amount} name={item.concept} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MovementsPanel;
