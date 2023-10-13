import './App.css';
import CountryCapitalGame from "./Components/CountryCapitalGame";

function App() {

const data = {
  "India": "New Delhi",
  "Germany": "Berlin",
  "USA": "Washington",
  "France": "Paris",
  "Australia": "Canberra",
  "Canada": "Ottawa",
};
  return (
    <div className="App">
      <CountryCapitalGame data={data} />
    </div>
  );
}

export default App;