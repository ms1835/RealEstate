import React, { useEffect, useState } from 'react'
import ComplaintItem from './ComplaintItem';
import "../css/BackGround.css"
import Loader from '../Loader'
const host = process.env.REACT_APP_SERVER_HOST_URL;

function ViewComplaint() {

    const [complaints, setcomplaints] = useState([]);   // state for storing complaints
    const [lodding, setlodding] = useState(true)       // checking content loading


    //API call to see all complaints
    const getComplaint = async () => {
        const responce = await fetch(`${host}/api/complaint/fetchAll`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });

        const output = await responce.json();
        setcomplaints(output.complaints);     // updating state of complaints  
        setlodding(false)                    // updating state of setLodding
    }

    useEffect(() => {
        getComplaint();   // calling getComplaint() function
    }, [])

    return (
        <div className='backGround2'>
        <div className='container-fluid '>
            {
            lodding ? <Loader /> :
                complaints.length == 0 ? <h2 className='text-white p-3'>No complaints registered yet.</h2> : <><h2 className='text-white p-3'>Registered Complaints</h2>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        {complaints.map((complaint ,index) => {
                            return <ComplaintItem key={complaint._id} complaint={complaint} index={index} />
                        })}
                    </div>
                </>
            }
        </div>
       </div>
    )
}

export default ViewComplaint