// import React from "react";

// const data = {
//     "India": "New Delhi",
//     "Germany": "Berlin",
//     "USA": "Washington",
//     "France": "Paris",
//     "Australia": "Canberra",
//     "Canada": "Ottawa",
// };

// const CountryCapital = () => {
//   return (
//     <div className="countryCapital">
//       <h1>Country - Capital Matching Game</h1>
//       <p> NB : You need to match a country to its capital by clicking on appropriate buttons</p>
//       {Object.entries(data).map(([country, capital]) => (
//         <div key={country}>
//           <button>{country}</button>
//           <button>{capital}</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CountryCapital;
 

import React, { useState, useEffect } from "react";

const CountryCapital = ({ data }) => {
  const [buttons, setButtons] = useState([]);
  const [selectedPair, setSelectedPair] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const buttonsArray = Object.keys(data).concat(Object.values(data));
    const shuffledArray = shuffleArray(buttonsArray);
    setButtons(shuffledArray);
  }, [data]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleButtonClick = (text) => {
    if (selectedPair.length < 2) {
      const newSelectedPair = [...selectedPair, text];
      setSelectedPair(newSelectedPair);

      if (newSelectedPair.length === 2) {
        const [country, capital] = newSelectedPair;
        if (data[country] === capital) {
          // Correct pair selected, remove buttons
          setButtons((prevButtons) => prevButtons.filter((btn) => btn !== country && btn !== capital));
        } else {
          // Wrong pair selected, reset selected pair after a short delay
          setTimeout(() => {
            setSelectedPair([]);
          }, 1000);
        }
      }
    }
  };

  useEffect(() => {
    if (buttons.length === 0) {
      setMessage("Congratulations! You matched all countries with their capitals!");
    } else {
      setMessage("");
    }
  }, [buttons]);

  return (
    <div className="countryCapital">
      <h1>Country - Capital Matching Game</h1>
      <p> NB: You need to match a country to its capital by clicking on appropriate buttons</p>
      {buttons.map((text, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(text)}
          style={{
            backgroundColor:
              selectedPair.includes(text) && selectedPair.length < 2
                ? "#0000FF"
                : selectedPair.includes(text) && selectedPair.length === 2 && data[selectedPair[0]] !== text
                ? "#FF0000"
                : "",
          }}
        >
          {text}
        </button>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

export default CountryCapital;