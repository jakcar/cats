import "./styles.css";
import RandomCats from "./RandomCats";
import React from "react";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 Välkommen till Katthörnan!</h1>
        <p className="subtitle">Spinn iväg.</p>
      </header>

      <main>
        <RandomCats />
      </main>

      <footer className="app-footer">
        <p>Made with ❤️ using The Cat API</p>
      </footer>
    </div>
  );
}

export default App;
