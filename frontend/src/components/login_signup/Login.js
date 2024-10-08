import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/UpdateProfile.css'
import AlertContext from '../context/AlertContext'
import "../css/BackGround.css"
import Alert from '../Alert'


const Login = () => {

    // using to accessed data without passing the props down manually to each level(component hierarch)
    const context = useContext(AlertContext);    // context API for custom alerts
    const { addAlert } = context;        // destructuring addAlert from AlertContext

    const [credentials, setCredentials] = useState({ email: `${process.env.REACT_APP_GUEST_USER}`, password: `${process.env.REACT_APP_GUEST_PWD}` })  // useState hook for credentials
    const [userType, setuserType] = useState("buyer")       // useState hook for userType 
    let navigate = useNavigate();    // for navigation/page redirection

    //Function to handle form on submit
    const handleSubmit = async (e) => {
        e.preventDefault(); // stops page reloading

        //API call to login seller/buyer/agent/admin as per given credentials
        const response = await fetch(
            `${process.env.REACT_APP_SERVER_HOST_URL}/api/auth/${userType}/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            }
        );
        const json = await response.json();
        if (json.success) {
            // save the token and userType  then redirect
            localStorage.setItem('token', json.authtoken)
            localStorage.setItem('userType', userType)
            addAlert({
                type: 'success',
                msg: 'Login successful'
            })

            navigate('/')
        }
        else {   // Wrong Credentials used
            addAlert({
                type: 'danger',
                msg: 'Invalid Credentials!'
            })
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })   // setting state for credentials of logged in user
    }

    const onChangeType = (e) => {
        setuserType(e.target.value)    //Setting state for userType(whether it is seller,buyer,admin or agent)
    }

    return (
        <div className='backGround'>
            <Alert />

            <div className='update-container'>
                <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center gap-32'>
                    <h3 className='mb-32 text-center'>LOGIN</h3>
                    <div className="mb-3" >
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={credentials.email} name="email" aria-describedby="emailHelp"
                            onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" value={credentials.password} name="password" className="form-control"
                            onChange={onChange} />
                    </div>
                    <select className="mb-3 form-select form-select-md rounded custom-select" aria-label="Default select example" onChange={onChangeType} required>
                        <option value="">Select Persona </option>
                        <option value="seller">Seller</option>
                        <option value="buyer" selected>Buyer</option>
                        <option value="admin">Admin</option>
                        <option value="agent">Agent</option>
                    </select>
                    <div className='flex align-self-center'>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login