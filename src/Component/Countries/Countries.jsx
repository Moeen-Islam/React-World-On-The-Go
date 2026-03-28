import React from 'react';
import { use } from "react";
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    return (
        <div className='countries'>
            {
                countries.map(country => <Country key =  {country.cca3.cca3} country ={country}></Country>)
            }
        </div>
    );
};

export default Countries;