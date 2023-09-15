import React from "react";

function ShowCountries({submittedCountry}) {
    return (
    <div>
      {submittedCountry.map((country, index) => (
        <div key={index}>
          <h2>Name: {country.name.common}</h2>
          <p>Independent Status: {country.independent}</p>
          <p>Capital: {country.capital}</p>
          <p>Continent: {country.continent}</p>
          <p>Flag: {country.flag}</p>
        </div>
      ))}
    </div>
    
  );
}


export default ShowCountries;
