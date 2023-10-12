import React, { useState, useEffect } from "react";

const data = {
  "India": "New Delhi",
  "Germany": "Berlin",
  "USA": "Washington",
  "France": "Paris",
  "Australia": "Canberra",
  "Canada": "Ottawa",
};

function shuffleObject(object) {
  const keys = Object.keys(object); 
  const shuffledKeys = shuffleArray(keys);
  const shuffledValues = shuffleArray(keys.map(key => object[key]));

  return shuffledKeys.reduce((result, key, index) => {
    result[key] = shuffledValues[index];
    return result;
  }, {});
}

function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

const CountryCapital = () => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    setShuffledData(shuffleObject(data));
  }, []);

  const add = (selectedCountry, selectedCapital) => {
  };

  return (
    <div className="countryCapital">
      <h1>Country - Capital Matching Game</h1>
      {Object.entries(shuffledData).map(([country, capital]) => (
        <div key={country}>
          <button onClick={() => add(country, capital)}>{country}</button>
          <button onClick={() => add(country, capital)}>{capital}</button>
        </div>
      ))}
    </div>
  );
};

export default CountryCapital;