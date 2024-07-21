import React from 'react'
import { Link } from "react-router-dom";

function ApartmentItem(props) {

    const { agent, sender, receiver } = props;    // destrucuturing props sent from AgentResult

    return (
        <div className="card w-50">
            <div className="card-body row">
                <h6 className="col-md-6  my-2 "><span style={{color:'brown'}}> Name - </span>{agent.name}</h6>
                <h6 className="col-md-6  my-2 "><span style={{color:'brown'}}>Area -</span>  {agent.workingArea}</h6>
                <h6 className="col-md-6  my-2 "><span style={{color:'brown'}}>Charges -</span>  {agent.charges}</h6>
                <Link 
                    className="btn col-md-4  my-2 text-white" 
                    to={'/chat'} 
                    state={{ sender : sender , receiver : receiver }} 
                    role="button" 
                    aria-disabled="true"
                    style={{background: "rgba(35, 66, 74)"}}
                    >
                        Chat with Agent
                </Link >
            </div>
        </div>
    )
}

export default ApartmentItem