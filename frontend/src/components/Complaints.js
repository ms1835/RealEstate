import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import "./css/BackGround.css"
import Alert from './Alert'
import AlertContext from './context/AlertContext'

const Complaints = () => {

    const [complaint, setcomplaint] = useState({ email: "", title: "", description: "" })
    let navigate = useNavigate();

    const context = useContext(AlertContext);
    const { addAlert } = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, title, description } = complaint;
        const response = await fetch(
            `${process.env.REACT_APP_SERVER_HOST_URL}/api/complaint/create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, title, description }),
            }
        );

        const json = await response.json();
        if (json.success) {
            addAlert({
                type: 'success',
                msg: 'Complaint Registered Successfully'
            })
            navigate("/");
        }
        else {
            addAlert({
                type: 'danger',
                msg: json.error
            })
            return;
        }
    }
    const onChange = (e) => {
        setcomplaint({ ...complaint, [e.target.name]: e.target.value })
    }
    return (
        <div className=' backGround'>
            <Alert />
            <div className='update-container'>
            <h3 className='mb-32 text-center'>Register Your Complain</h3>
                <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center gap-32 my-4'>
                    <div className=" mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={onChange} aria-describedby="emailHelp"
                            id="email" name="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" onChange={onChange} aria-describedby="emailHelp"
                            id="title" name="title" required minLength={5} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea type="text" className="form-control" rows={5} onChange={onChange} aria-describedby="emailHelp"
                            id="description" name="description" required minLength={10} />
                    </div>
                    <div className='flex align-self-center'>
                        <button type="submit" className="btn btn-success" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Complaints