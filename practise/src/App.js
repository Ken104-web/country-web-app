import {useState, useEffect} from 'react';
import CountryApp from './components/countries';
import ShowCountries from './components/displaycountries';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/countries")
    .then(resp => resp.json())
    .then(data => 
      setCountries(data))
  }, [])
  return (
    <div className="App">
      <CountryApp countries={countries}/>
      <ShowCountries />
    </div>
  );
}

export default App;
