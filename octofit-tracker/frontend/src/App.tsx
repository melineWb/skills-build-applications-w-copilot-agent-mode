import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-shell">
      <header>
        <h1>OctoFit Tracker</h1>
        <p>Modern React 19 + Vite starter for the OctoFit multi-tier app.</p>
      </header>
      <main>
        <button onClick={() => setCount((value) => value + 1)}>
          Activity pulses: {count}
        </button>
      </main>
    </div>
  );
}

export default App;
