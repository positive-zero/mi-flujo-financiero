import React from "react";
import Debt from "./Debt";

function DebtsPanel() {
  return (
    <section>
      <h2>Deudas</h2>
      <div className="column-controls">
        <input type="text" placeholder="Persona" />
        <input type="number" placeholder="Cantidad debida" />
        <input type="date" />
        <button className="secondary-btn">Listo</button>
      </div>
      <h3>A favor</h3>
      <ol>
        <Debt date={"7 de octubre"} debt={2344} person={"Alex"} />
        <Debt date={"7 de agosto"} debt={400} person={"Juan"} />
        <li className="debt">
          <div>
            <div>Primo alex - $22,000</div>
            <small>05 de octubre</small>
          </div>

          <button className="secondary-btn">Saldar</button>
        </li>
      </ol>
      <h3>Por pagar</h3>
      <ol>
        <Debt date={"7 de octubre"} debt={32000} person={"SAT"} />
        <Debt date={"6 de abril"} debt={1229} person={"Alice"} />
      </ol>
    </section>
  );
}

export default DebtsPanel;
