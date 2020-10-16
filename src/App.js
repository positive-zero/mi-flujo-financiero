import React, { useState, useEffect } from "react";
import "./App.css";
import DebtsPanel from "./componentes/DebtsPanel";
import SavingsPanel from "./componentes/SavingsPanel";
import MovementsPanel from "./componentes/MovementsPanel";
import { sum } from "./componentes/MovementsPanel";

function App() {
  const [conceptValue, setConceptValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    async function getMovements() {
      const res = await fetch(
        "https://miflujofinanciero.herokuapp.com/movements"
      );
      const data = await res.json();
      setMovements(data);
    }
    getMovements();
  }, []);

  async function addMovement() {
    try {
      const newMovement = {
        name: conceptValue,
        amount: amountValue,
      };
      const movementJSON = JSON.stringify(newMovement);
      const respuesta = await fetch(
        "https://miflujofinanciero.herokuapp.com/movements",
        {
          method: "POST",
          body: movementJSON,
          headers: { "Content-Type": "application/json" },
        }
      );
      await respuesta.json();
      let movementsCopy = [...movements];
      movementsCopy.push({
        amount: Number(amountValue),
        name: conceptValue,
      });
      setMovements(movementsCopy);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMovement(movement) {
    try {
      const res = await fetch(
        "https://miflujofinanciero.herokuapp.com/movements/" + movement.id,
        { method: "DELETE" }
      );
      const deletedMovement = await res.json();
      console.log(deletedMovement);
      let movementsCopy = [...movements];
      const indexToDelete = movementsCopy.findIndex(
        (m) => m.name === movement.name
      );
      movementsCopy.splice(indexToDelete, 1);
      setMovements(movementsCopy);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <nav>
        <div className="nav-content container">
          <h1>Mi flujo financiero 💸</h1>

          <div className="right-nav-items">
            <span>Usuario: alexvilchis</span>
            <a href="/ayuda">Ayuda</a>
            <a href="#">Salir</a>
          </div>
        </div>
      </nav>

      <main className="container">
        <h2>Tu flujo de efectivo es: ${sum(movements)}</h2>
        <p>Esta es la cantidad que debes tener libre en tu carteta cada mes.</p>

        <div className="main-controls">
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

        <div className="panels">
          <MovementsPanel
            movements={movements}
            onMovementDelete={deleteMovement}
          />
          <DebtsPanel />
          <SavingsPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
