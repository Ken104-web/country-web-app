import React from "react";

function showCountries(countries){
    return(
        <div>
            {countries.map(country => (
            `<h2>Name: ${country.name.common}</h2>
            <p>Independence status: ${country.independent}</p>
            <p>Capital: ${country.capital}</p>
            <p>Continent: ${country.continents}</p>
            <p> Flag: ${country.flag}</p>
            `
            ))}
        </div>
    )
}

export default showCountries;