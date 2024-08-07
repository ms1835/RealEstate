import React, { useState, useContext } from 'react';
import '../css/Dashboard.css'
import { useNavigate, useLocation } from 'react-router-dom';
import "../css/BackGround.css"
import Alert from '../Alert'

import AlertContext from '../context/AlertContext'

export default function UpdateProfile() {
    const host = process.env.REACT_APP_SERVER_HOST_URL;

    const location = useLocation()      // Getting location of  page
    const { userDetails } = location.state  

    const context = useContext(AlertContext);  // context API for custom alerts
    const { addAlert } = context;             //  destructuring addAlert from AlertContext
 
    //it is for handle the state of updateProfile
    const [updateProfile, setupdateProfile] = useState({ name: userDetails.name });

    //to navigate 
    const navigate = useNavigate();

    //function to update profile
    const handleUpdateProfile = async (e) => {
        //this is to do not reload our page
        e.preventDefault();

        //API call to update the profile our users
        const response = await fetch(`${host}/api/auth/admin/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',   // body data type must match "Content-Type" header
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ name: updateProfile.name }) 
        });
        const json = await response.json();
 
        if (json.success) {
            addAlert({
                type: 'success',
                msg: 'Profile updated successfully'
            })
            
            navigate('/admin/dashboard')
        }
        else {
            addAlert({
                type: 'danger',
                msg: json.error
            })
        }
    }
    const onChange = (e) => {
     
        setupdateProfile({ ...updateProfile, [e.target.name]: e.target.value })
    }

    return (
        <div className='backGround'>
            <Alert />
            <form onSubmit={handleUpdateProfile}>
                <div className='update-container'>
                    <div className='update-top text-white mb-5 rounded' style={{background: "rgba(35, 66, 74)"}}>Update Profile </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Enter Name</label>
                        <input type="text" className="form-control" id="name" name='name' value={updateProfile.name} onChange={onChange} placeholder="Shivam sahu" required minLength={3} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-success" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
