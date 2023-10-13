// import React, { useState, useEffect } from "react";

// const data = {
//   "India": "New Delhi",
//   "Germany": "Berlin",
//   "USA": "Washington",
//   "France": "Paris",
//   "Australia": "Canberra",
//   "Canada": "Ottawa",
// };

// function shuffleObject(object) {
//   const keys = Object.keys(object);
//   const shuffledKeys = shuffleArray(keys);
//   const shuffledValues = shuffleArray(keys.map(key => object[key]));

//   return shuffledKeys.reduce((result, key, index) => {
//     result[key] = shuffledValues[index];
//     return result;
//   }, {});
// }

// function shuffleArray(array) {
//   return array.slice().sort(() => Math.random() - 0.5);
// }

// const CountryCapital = () => {
//   const [shuffledData, setShuffledData] = useState([]);

//   useEffect(() => {
//     setShuffledData(shuffleObject(data));
//   }, []);

//   const add = (selectedCountry, selectedCapital) => {
//   };

//   return (
//     <div className="countryCapital">
//       <h1>Country - Capital Matching Game</h1>
//       {Object.entries(shuffledData).map(([country, capital]) => (
//         <div key={country}>
//           <button onClick={() => add(country, capital)}>{country}</button>
//           <button onClick={() => add(country, capital)}>{capital}</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CountryCapital;



// // import React, { useState, useEffect } from "react";

// // const data = {
// //   "India": "New Delhi",
// //   "Germany": "Berlin",
// //   "USA": "Washington",
// //   "France": "Paris",
// //   "Australia": "Canberra",
// //   "Canada": "Ottawa",
// // };

// // const CountryCapitalGame = () => {
// //   const [pairs, setPairs] = useState([]);
// //   const [selectedPair, setSelectedPair] = useState([]);
// //   const [completedPairs, setCompletedPairs] = useState([]);
// //   const [entries, setEntries] = useState(Object.entries(data));
// //   const [state, setState] = useState({
// //     country: "",
// //     capital: "",
// //     correct: false,
// //   });

// //   const shufflePairs = (pairs) => {
// //     const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
// //     setPairs(shuffledPairs);
// //   };

// //   useEffect(() => {
// //     const pairsArray = Object.entries(data).flatMap(([country, capital]) => [
// //       { type: "country", value: country, id: `${country}-${capital}` },
// //       { type: "capital", value: capital, id: `${country}-${capital}` },
// //     ]);
// //     shufflePairs(pairsArray);
// //   }, []);

// //   const handlePairSelection = (index, value, id) => {
// //     if (selectedPair.length === 0) {
// //       setSelectedPair([index, value, id]);
// //     } else {
// //       const [prevIndex, prevValue, prevId] = selectedPair;
// //       if (prevValue === value && prevId !== id) {
// //         setCompletedPairs([...completedPairs, prevId, id]);
// //         setSelectedPair([]);
// //       } else {
// //         setSelectedPair([index, value, id]);
// //         setTimeout(() => {
// //           setSelectedPair([]);
// //         }, 1000);
// //       }
// //     }
// //   };

// //   const isPairSelected = (id) => selectedPair[2] === id;
// //   const isPairCompleted = (id) => completedPairs.includes(id);
// //   const allPairsMatched = completedPairs.length === pairs.length;

// //   const checkAnswer = (country, capital) => {
// //     if (data[country] === capital) {
// //       const filteredEntries = entries.filter(
// //         ([c, cap]) => !(c === country && cap === capital)
// //       );
// //       setEntries(filteredEntries);
// //       setState({ country: "", capital: "", correct: true });
// //     } else {
// //       setState({ country, capital, correct: false });
// //     }
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Country Capitals Game</h1>
// //       {pairs.map(({ type, value, id }, index) => (
// //         <button
// //           key={index}
// //           onClick={() => {
// //             handlePairSelection(index, value, id);
// //             checkAnswer(value, data[value]);
// //           }}
// //           style={{
// //             backgroundColor: isPairSelected(id)
// //               ? "#0000ff"
// //               : isPairCompleted(id)
// //               ? "#ff0000"
// //               : "",
// //           }}
// //           disabled={isPairSelected(id) || isPairCompleted(id)}
// //         >
// //           {value}
// //         </button>
// //       ))}
// //       {allPairsMatched && <p>Congratulations!</p>}
// //     </div>
// //   );
// // };

// // export default CountryCapitalGame;


