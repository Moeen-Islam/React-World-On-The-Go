import "./Country.css"
import React, { useState } from 'react';

const Country = ({country}) => {

    const [visited, setVisited] = useState(false)
    const handelVisited = () => {
        // visited? setVisited(false) : setVisited(true) 1st System
        // setVisited(visited? false:true) 2nd system
        setVisited(!visited)
    }


    return (
        <div className={`country`}>
            <div className="image-box">
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            </div>
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population}</p>
            <button onClick={handelVisited} className={`${visited && 'country-visited'}`}>
                {
                    visited? "Visited" : "Not Visited"
                }
            </button>
        </div>
    );
};

export default Country;