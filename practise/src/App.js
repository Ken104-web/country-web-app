import {useState, useEffect} from 'react';
import CountryApp from './components/countries';
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
    </div>
  );
}

export default App;
