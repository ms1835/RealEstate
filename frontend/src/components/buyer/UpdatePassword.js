import React, { useState, useContext } from 'react'
import '../css/Dashboard.css'
import AlertContext from '../context/AlertContext'
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert'
import "../css/BackGround.css"
export default function UpdatePassword() {

    const host = process.env.REACT_APP_SERVER_HOST_URL;    //HOST

    //it is for handle the state of updated Password
    const [updatePassword, setupdatePassword] = useState({ oldPassword: "", newPassword: "", cnewPassword: "" });

    const context = useContext(AlertContext);    // context API for custom alerts
    const { alert, addAlert } = context;         // destructuring addAlert from AlertContext
    
    //to navigate 
    const navigate = useNavigate();

    //function to update user's password
    const handleUpdatePassword = async (e) => {
        //avoid page reloading 
        e.preventDefault();

        //if the user entered password and confirm password are not same
        if (updatePassword.cnewPassword !== updatePassword.newPassword) {
            addAlert({
                type: 'danger',
                msg: 'Password and confirm password should be same'
            })
            return;
        }

        //API call to update the password our user
        const response = await fetch(`${host}/api/auth/buyer/updatePassword`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ oldPassword: updatePassword.oldPassword, newPassword: updatePassword.newPassword }) // body data type must match "Content-Type" header
        });

        const json = await response.json();  // getting response

        if (json.success) {
            addAlert({
                type: 'success',
                msg: 'Password updated successfully'
            })
            navigate('/buyer/dashboard')
        }
        else {

            addAlert({
                type: 'danger',
                msg: json.error
            })
        }
    }
    // function to detect inputs in the form
    const onChange = (e) => {

        setupdatePassword({ ...updatePassword, [e.target.name]: e.target.value })   //setting State of updatePassword
    }

    return (
        <div className='backGround'>
            <Alert />
            <form onSubmit={handleUpdatePassword}>
                <div className='update-container'>
                    <div className='update-top text-white mb-5 rounded' style={{background: "rgba(35, 66, 74)"}}>Update Your Password </div>
                    <div className="mb-3">
                        <label htmlFor="oldPassword" className="form-label">Enter old password</label>
                        <input type="password" className="form-control" id="oldPassword" value={updatePassword.oldPassword} name='oldPassword' placeholder="Password" onChange={onChange} required minLength={5} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="newPassword" className="form-label">Enter new password</label>
                        <input type="password" className="form-control" id="newPassword" value={updatePassword.newPassword} name='newPassword' placeholder="New Password" onChange={onChange} required minLength={5} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cnewPassword" className="form-label">Confirm new password</label>
                        <input type="password" className="form-control" id="cnewPassword" value={updatePassword.cnewPassword} name='cnewPassword' placeholder="Confirm New Password" onChange={onChange} required minLength={5} />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-success" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
