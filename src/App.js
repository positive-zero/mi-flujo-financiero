import React from "react";
import "./App.css";
import DebtsPanel from "./componentes/DebtsPanel";
import SavingsPanel from "./componentes/SavingsPanel";
import MovementsPanel from "./componentes/MovementsPanel";

function App() {
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
        <h2>Tu flujo de efectivo es: $11,280</h2>
        <p>Esta es la cantidad que debes tener libre en tu carteta cada mes.</p>

        <div class="main-controls">
          <input type="text" placeholder="Concepto" />
          <input type="number" placeholder="Cantidad" />
          <button>Registrar</button>
        </div>

        <div class="panels">
          <MovementsPanel />
          <DebtsPanel />
          <SavingsPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
