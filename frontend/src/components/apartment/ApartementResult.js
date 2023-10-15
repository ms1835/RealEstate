import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import ApartmentItem from './ApartmentItem';
import "../css/Apartement.css"
import Spinner from '../Spinner'
const host = 'http://localhost:5000';

function ApartementResult() {
    const location = useLocation()     // Getting location of  page
    const { area } = location.state    // destructuring area from state

    // let areaNEW = area.toLowerCase();   // converting area entered into lowecase 
    const [apartements, setApartements] = useState([]);    // useState for apartments
    const [isLoading, setLoading] = useState(true)           // useState for loading

    //API call for getting apartments as per passed/given area
    const getApartment = async () => {
        const response = await fetch(`${host}/api/apartment/getApartment/${area}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const output = await response.json();   // matched/found apartments result
        setApartements(output);                // setting state for apartments
        setLoading(false)                      // setting state for loading
    }

    useEffect(() => {
        getApartment();   // calling getApartment()
    }, [])

    return (
        <div className='ApartementBackground'>
            {isLoading && <Spinner />}
            {
                !isLoading && apartements.length == 0 ? 
                    <h2 style={{ marginTop: '0px', marginLeft: '10vw' , color : 'whitesmoke', paddingTop: 8}}>Currently No Property is found in {area}</h2> : <div><h2 style={{ margin: '0px 34vw' , color : 'whitesmoke'}}>Property in {area}</h2>
                    <div className="d-flex flex-column">
                        {
                            apartements.map((apartement, index) => 
                                <ApartmentItem key={apartement._id} apartement={apartement} index={index} />
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default ApartementResult