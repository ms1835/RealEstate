import React from 'react'
import { Link } from "react-router-dom";

function ReceiverItem(props) {

    const { receiver, sender } = props;

    const capitalize = word => {
        const lower = word;
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className="card m-4 p-4">
            <div className="backgroundChat card-body row " style={{fontWeight:"bold"}}>
                <h6 className="col-md-12  my-2 "><span > Name -</span> <span s>{receiver.name}</span></h6>
                <h6 className="col-md-12  my-2 "><span>User Type - </span> <span>{capitalize(receiver.type)} </span> </h6>
                <div className='d-flex justify-content-center align-items-center'>
                    <Link className="btn btn-success col-md-8  my-2 lets-chat-btn" to={'/chat'} state={{ receiver, sender }} role="button" aria-disabled="true">Chat Here</Link >
                </div>
            </div>

        </div>
    )
}

export default ReceiverItem