import React, { useState } from "react";

const data = {
  "India": "New Delhi",
  "Germany": "Berlin",
  "USA": "Washington",
  "France": "Paris",
  "Austrillia": "Canberra",
  "Canada": "Ottawa",
};

const CapitalGame = () => {
    const [entries, setEntries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCapital, setSelectedCapital] = useState("");
    const [wrongAnswer, setWrongAnswer] = useState(false);
}