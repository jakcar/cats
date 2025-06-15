import { useState, useEffect } from "react";
import "./RandomCats.css";

const RandomCats = () => {
  const [cats, setCats] = useState(null);
  const [value, setValue] = useState(1);
  const [fetchInProgress, setFetchInProgress] = useState(false);
  const [category, setCategory] = useState("all");

  const categories = [
    { value: "all", label: "Alla katter" },
    { value: "5", label: "Katt i låda" },
    { value: "15", label: "Katt i kläder" },
    { value: "1", label: "Katt i hatt" },
    { value: "14", label: "Katt i handfat" },
    { value: "2", label: "Katt i rymden" },
    { value: "7", label: "Katt i slips/fluga" },
    { value: "9", label: "Katt i dröm" },
  ];

  useEffect(() => {
    setFetchInProgress(true);
    const url =
      category === "all"
        ? "https://api.thecatapi.com/v1/images/search"
        : `https://api.thecatapi.com/v1/images/search?category_ids=${category}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setCats(result[0].url);
        setFetchInProgress(false);
      })
      .catch((error) => {
        console.error("Error fetching cat:", error);
        setFetchInProgress(false);
      });
  }, [value, category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setValue(value + 1);
  };

  return (
    <div className="random-cats-container">
      <div className="controls">
        <div className="select-wrapper">
          <label htmlFor="category-select">Kattegori:</label>
          <select
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            className="category-select"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => setValue(value + 1)} className="random-button">
          🎲 Mjau!
        </button>
      </div>

      {fetchInProgress ? (
        <p className="loading-text">
          <span className="paw-icon">🐾</span> Laddar katt...
        </p>
      ) : (
        <>
          <div className="cat-frame">
            <img src={cats} alt="En söt katt" className="cat-image" />
          </div>
          <p className="stats">
            Du har tittat på {value} kattbild{value > 1 && <span>er</span>}
          </p>
        </>
      )}
    </div>
  );
};

export default RandomCats;
