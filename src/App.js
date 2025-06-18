import "./styles.css";
import RandomCats from "./RandomCats";
import React, { useState, useEffect } from "react";
import { getCookie, setCookie } from "./utils/cookies";

function App() {
  const [showCookieNotice, setShowCookieNotice] = useState(false);

  useEffect(() => {
    // Check if user has already seen the cookie notice
    const hasSeenNotice = getCookie("cookieNoticeSeen");
    if (!hasSeenNotice) {
      setShowCookieNotice(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookie("cookieNoticeSeen", "true", 365);
    setShowCookieNotice(false);
  };

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
        <p>
          Built using{" "}
          <span className="react-icon" title="React">
            ⚛
          </span>{" "}
          by{" "}
          <a
            href="https://jakobcarlbring.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jakob Carlbring
          </a>
        </p>
      </footer>

      {showCookieNotice && (
        <div className="cookie-notice">
          <p>
            🍪 Denna webbplats använder cookies för att komma ihåg hur många
            kattbilder du har tittat på. Inga personuppgifter samlas in.
          </p>
          <button onClick={handleAcceptCookies} className="cookie-accept-btn">
            Förstått
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
