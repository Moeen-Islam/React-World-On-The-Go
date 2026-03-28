import React, { useState } from 'react';
import { use } from "react";
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const handelVisitedCountries = (country) => {

        const exists = visitedCountries.find(c => c.cca3 === country.cca3);

            if (exists) {
                const updated = visitedCountries.filter(
                c => c.cca3 !== country.cca3
                );
                setVisitedCountries(updated);
            } else {
                const newVisitedCountries  = [...visitedCountries,country]
                setVisitedCountries(newVisitedCountries)
            }
        
    }   
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    return (
        <div>
            <h3>Total Country : {countries.length}</h3>
            <h3>Total Country Visited : {visitedCountries.length}</h3>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key =  {country.cca3.cca3} 
                    country ={country}
                    handelVisitedCountries = {handelVisitedCountries}
                    ></Country>)
            }
        </div>
        </div>
        
    );
};

export default Countries;