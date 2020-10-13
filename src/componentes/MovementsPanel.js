import React from "react";
import Movement from "./Movement";

function MovementsPanel() {
  return (
    <section>
      <div class="movement-group">
        <h2>Ingresos</h2>
        <p>Total de ingresos: $19,500</p>
        <ul>
          <Movement amount={15000} name="Salario" />
          <Movement amount={3400} name="Mesada" />
          <Movement amount={1200} name="Regalo de tio" />
        </ul>
      </div>

      <div class="movement-group">
        <h2>Gastos</h2>
        <p>Total de gastos: $8,220</p>
        <ul>
          <Movement amount={-3000} name="Comida" />
          <Movement amount={-300} name="Uber" />
          <Movement amount={-300} name="Internet" />
        </ul>
      </div>
    </section>
  );
}

export default MovementsPanel;
