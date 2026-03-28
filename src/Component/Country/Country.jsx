import "./Country.css"
import React, { useState } from 'react';

const Country = ({country, handelVisitedCountries}) => {

    const [visited, setVisited] = useState(false)
    const handelVisited = () => {
        // visited? setVisited(false) : setVisited(true) 1st System
        // setVisited(visited? false:true) 2nd system
        setVisited(!visited)
        handelVisitedCountries(country)
    }


    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <div className="image-box">
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            </div>
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population}</p>
            <button onClick={handelVisited}>
                {
                    visited? "Visited" : "Not Visited"
                }
            </button>
        </div>
    );
};

export default Country;