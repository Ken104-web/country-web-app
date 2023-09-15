import {useState, useEffect} from 'react';
import CountryApp from './components/countries';
import ShowCountries from './components/displaycountries';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [submittedCountry, setSubmittedContry] = useState([])
// handling submitted country state
  const handleSubmit = (country) => {
    setSubmittedContry([...submittedCountry,country]);
  }


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(resp => resp.json())
    .then(data => 
      setCountries(data))
  }, [])
  return (
    <div className="App">
      <CountryApp countries={countries} onSubmit={handleSubmit}/>
      <ShowCountries  submittedCountry={submittedCountry}/>
    </div>
  );
}

export default App;
