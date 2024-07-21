import React from 'react'
import { useNavigate } from 'react-router-dom';

function UserItem(props) {

    const { users, index, userType, id, handleOnclick } = props;
    console.log(id)

    return (
        <div className="card" style={{ width: "30vw", margin: "30px auto", backgroundColor: 'whitesmoke', borderRadius: '10px' }}>
            <div className="card-body row text-white rounded" style={{background: "radial-gradient(#47827e, #395f5e)"}}>
                <h6 className="col-md-12  my-2 "><span >Name -</span> {users.name}</h6>
                <h6 className="col-md-12  my-2 "><span >Email -</span> {users.email}</h6>
                <div className='d-flex justify-content-center align-items-center'>
                    <button className="col-md-6 btn mx-3 my-2 text-white" onClick={() => handleOnclick(id, userType)} role="button" aria-disabled="true" style={{background: "rgba(35, 66, 74)"}}> Delete </button>
                </div>
                
            </div>
        </div>
    )
}

export default UserItem