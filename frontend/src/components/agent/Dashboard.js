import React, { useEffect, useState } from 'react'
import '../css/Dashboard.css'
import Alert from '../Alert'
import { NavLink } from 'react-router-dom';
import Receiver from '../chat/Receiver';


export default function Dashboard() {
    const host = process.env.REACT_APP_SERVER_HOST_URL;

    //useState hook to maintain the user state
    const [userDetails, setuserDetails] = useState({ name: "", email: "", contact: "", area: "", charges: "", id: "" })
    const [loading, setloading] = useState(true);

    //This is function to fect user details
    const getUserDetails = async (e) => {
        //API call to fetch user data
        const response = await fetch(`${host}/api/auth/agent/getUser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },

        });
        //getting user data
        const json = await response.json();

        if (json.success) {
            //when we get the user data successfully, set that
            setuserDetails({ name: json.user.name, email: json.user.email, contact: json.user.contactNumber, area: json.user.workingArea, charges: json.user.charges, id: json.user._id })
        }
        else {
            alert("Your credentails is not valid. please try to login again!")
        }
        setloading(false);
    }

    //Runs only on the first render page to get user data
    useEffect(() => {
        getUserDetails();

    }, [])

    //function to capitalize any string
    function capitalize(name) {
        return name.replace(/\b(\w)/g, s => s.toUpperCase());
    }
    return (
        <div style={{ minHeight: "100vh" }} id='background-image'>
            {
                !loading ? <>
                    <div className='dashboard-top text-white'>Dashboard </div>
                    <Alert />
                    <div className='dashboard d-flex'>
                        <div className="dashboard-left d-flex flex-column align-items-center">
                            <div className='profile'>
                                <div className='profile-data'><span>Name: </span>{capitalize(userDetails.name.toLowerCase())}</div>
                                <div className='profile-data'><span>Email Id: </span>{userDetails.email.toLowerCase()}</div>
                                <div className='profile-data'><span>Contact: </span>{userDetails.contact}</div>
                                <div className='profile-data'><span>Working Area: </span>{capitalize(userDetails.area.toLowerCase())}</div>
                                <div className='profile-data'><span>Charges: </span>&#8377; {userDetails.charges} /-</div>
                            </div>
                            <div className="update">
                                <NavLink to="/agent/update-profile" state={{ userDetails }}  ><button type="button" className="btn btn-primary update-btn">Update Profile</button></NavLink>
                                <NavLink to="/agent/update-password"  ><button type="button" className="btn btn-primary update-btn">Update Password</button></NavLink>
                            </div>
                        </div>
                        <div className="dashboard-right border border-2 border-secondary">
                            <h2 className='text-white text-center' style={{ background: 'rgba(84, 77, 27,0.7)' }}>Chat History</h2>
                            <div className='chat-section' >
                                <Receiver id={userDetails.id} />
                            </div>
                        </div>
                    </div>
                </> : <></>
            }
        </div>

    )
}
