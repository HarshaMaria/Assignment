import React, { useState, useEffect } from "react";
import "./CountryCapitalGame.css";

const CountryCapitalGame = () => {
  const [data, setData] = useState({
    "India": "New Delhi",
    "Germany": "Berlin",
    "USA": "Washington",
    "France": "Paris",
    "Australia": "Canberra",
    "Canada": "Ottawa",
  });

  const shuffleData = (data) => {
    return Object.entries(data).sort(() => Math.random() - 0.5);
  };

  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    const shuffled = shuffleData(data);
    setShuffledData(shuffled);
  }, [data]);

  return (
    <div className="Capital">
      <h1>Match Country with Capital Game</h1>
      <div className="button-container">
        {shuffledData.map(([country, capital]) => (
          <div key={country} className="button-group">
            <button className="country-button">{country}</button>
            <button className="capital-button">{capital}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCapitalGame;