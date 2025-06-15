import "./styles.css";
import RandomCats from "./RandomCats";
import React from "react";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <span className="emoji">🐱</span> Välkommen till Katthörnan!
        </h1>
        <p className="subtitle">Spinn iväg.</p>
      </header>

      <main>
        <RandomCats />
      </main>

      <footer className="app-footer">
        <p>
          Made with ❤️ using{" "}
          <a
            href="https://thecatapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Cat API
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
