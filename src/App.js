import React, { useState } from "react";
import "./App.css";
import DebtsPanel from "./componentes/DebtsPanel";
import SavingsPanel from "./componentes/SavingsPanel";
import MovementsPanel from "./componentes/MovementsPanel";
import { sum } from "./componentes/MovementsPanel";

function App() {
  const [conceptValue, setConceptValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [movements, setMovements] = useState([]);

  function addMovement() {
    let movementsCopy = [...movements];
    movementsCopy.push({
      amount: Number(amountValue),
      concept: conceptValue,
    });
    setMovements(movementsCopy);
  }

  return (
    <div className="App">
      <nav>
        <div class="nav-content container">
          <h1>Mi flujo financiero 💸</h1>

          <div class="right-nav-items">
            <span>Usuario: alexvilchis</span>
            <a href="/ayuda">Ayuda</a>
            <a href="#">Salir</a>
          </div>
        </div>
      </nav>

      <main class="container">
        <h2>Tu flujo de efectivo es: ${sum(movements)}</h2>
        <p>Esta es la cantidad que debes tener libre en tu carteta cada mes.</p>

        <div class="main-controls">
          <input
            type="text"
            placeholder="Concepto"
            value={conceptValue}
            onChange={(e) => setConceptValue(e.target.value)}
          />
          <input
            type="number"
            placeholder="Cantidad"
            value={amountValue}
            onChange={(e) => setAmountValue(e.target.value)}
          />
          <button onClick={addMovement}>Registrar</button>
        </div>

        <div class="panels">
          <MovementsPanel movements={movements} />
          <DebtsPanel />
          <SavingsPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
