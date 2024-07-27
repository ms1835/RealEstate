import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './css/Home.css';
import buyImg from '../img/buy.jpg'
import rent from '../img/rent.jpg'
import Alert from './Alert';

// Home Page of application
function Home() {

    // using useState for using area value
    const [area, setArea] = useState("")

    // setting type of searching(agent , property)
    const [type, settype] = useState("")

    // handle for change of city value
    const onChange = (e) => {
        setArea(e.target.value);
    }

    // handle for change of type(agent , property) value
    const setSearchingType = (e) => {
        console.log("e.target.value is ", e.target.value)
        console.log("type is now set as : ", type)
        settype(e.target.value)
    }

    return (
        <div id="cont">
            <Alert />
            <form className="d-flex responsive-home gap-2" id='searchSection'>
                {/* <select className="mb-2 form-select" aria-label="Default select example" onChange={setSearchingType} style={{ width: "100px" }} required>
                    <option value="">Select</option>
                    <option value="property">Property</option>
                    <option value="agent">Agent</option>
                </select> */}
                <div style={{ width: "100px", paddingRight:16 }} >
                    <div class="form-check" onClick={setSearchingType} >
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="agent" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            <b> Agent</b>
                        </label>
                    </div>
                    <div class="form-check" onClick={setSearchingType} >
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="property" />
                        <label class="form-check-label" for="flexRadioDefault2" >
                            <b> Property </b>
                        </label>
                    </div>
                </div>
                <input className="form-control rounded" type="text" pattern="[a-zA-Z]*" placeholder="Enter Area or Agent For Property Details" id="area" name='area' onChange={onChange} value={area} aria-label="Search" required />
                <Link 
                    className={`btn btn-info mx-1 rounded text-black justify-content-center ${type === "" || !area ? "disabled" : ""}`} 
                    to={type === "property" ? '/apartmentResult' : '/agentResult'} 
                    state={{ area: area }} 
                    role="button" 
                    aria-disabled="true"
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    Search
                </Link >
            </form>
            <div className='container mb-3 '>
                <div className="d-flex justify-content-between responsive-cards gap-4">
                    <div className="card custom-card text-center" style={{ width: "18rem", borderRadius: "0.65rem", backgroundColor: 'whitesmoke' }}>
                        <img src={buyImg} id="sloganCardImg" loading='lazy' />
                        <h6 className="card-title w-full" style={{ margin: '2px auto', color: 'rgb(97, 43, 15)' }}>Buy Property</h6>
                        <p className="card-text w-full" style={{ margin: '20px 2px', color: 'rgba(53, 51, 51, 1)' }}>Discover Your Dream Property with Ease - Just a Click Away!</p>
                    </div>

                    <div className="card custom-card text-center" style={{ width: "18rem", borderRadius: "0.65rem", backgroundColor: 'whitesmoke' }}>
                        <img src={rent} id="sloganCardImg" loading='lazy' />
                        <h6 className="card-title w-full" style={{ margin: '2px auto', color: 'rgb(97, 43, 15)' }}>Rent Property</h6>
                        <p className="card-text w-full" style={{ margin: '20px 2px', color: 'rgba(53, 51, 51, 1)' }}>Find Your Perfect Rental Home - Convenient and Hassle-Free!</p>
                    </div>

                    <div className="card custom-card text-center" style={{ width: "18rem", borderRadius: "0.65rem", backgroundColor: 'whitesmoke' }}>
                        <img src={buyImg} id="sloganCardImg" loading='lazy' />
                        <h6 className="card-title w-full" style={{ margin: '2px auto', color: 'rgb(97, 43, 15)' }}>Sell Property</h6>
                        <p className="card-text w-full" style={{ margin: '20px 2px', color: 'rgba(53, 51, 51, 1)' }}>Sell Your Property Quickly and Easily - Get the Best Value Today!</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home