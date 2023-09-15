import React, { useState } from "react";

function CountryApp() {
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
    return (
        <div>
            <h1>Country web app</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name your country Here: </label>
                    <input
                    type = "text"
                    value = {country}
                    onChange={(e) => setCountry(e.target.value)}
                    />
                    <button type="submit">Enter</button>
                </div>
            </form>
        </div>
    )

}

export default CountryApp;

