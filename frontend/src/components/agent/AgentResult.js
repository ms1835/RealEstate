import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import AgentItem from './AgentItem';
import Loader from '../Loader'

const host = process.env.REACT_APP_SERVER_HOST_URL;

//Getting all the agents areawise 
function AgentResult() {

    const location = useLocation()      // Getting location of  page
    const { area } = location.state     // desctructuring area from location state
    const navigate = useNavigate();     // for navigation
    let areaNEW = area.toLowerCase();   // making input lowercase

    const [agents, setAgent] = useState([]);     //state for agent
    const [loading, setloading] = useState(true) // state for loader
    const [sender, setsender] = useState({ type: "", name: "", id: "" })   // state for sender


    //  API call to get logged in user details
    const userDetails = async () => {
        let type = localStorage.getItem('userType')
        let response = await fetch(`${host}/api/auth/${type}/getUser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },

        });
        //getting user data
        let json = await response.json();
        if (json.success) {
            //when we get the user data successfully
            setsender({ type: type, name: json.user.name, id: json.user._id })
        }

        // setloading(false);     // setting loading state

    }

    // API call to get agents areawise
    const getAgent = async () => {
        const responce = await fetch(`${host}/api/auth/agent/getAgent/${area}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const output = await responce.json();
        setAgent(output.agents);    // setting agents state
        setloading(false)           // setting loader state
    }

    useEffect(async () => {
        if (!localStorage.getItem('token') || localStorage.getItem('userType') === 'agent')   // if user is not logged in 
            navigate("/login");
        else {
            await userDetails();   // calling userDetails()
            await getAgent();      // calling getAgents()
        }

    }, [])

    return (
        <div className='ApartementBackground'>
            {
            loading ? <Loader /> : 
                agents.length == 0 ? <h2 className='text-white p-3'>Sorry, Currently we do not have any agent in {area}</h2> : <><h2 className='text-white p-3'>Agents in {area}</h2>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        {agents.map((agent) => {
                            let receiver = { id: agent._id, name: agent.name, type: "agent" }
                            return <AgentItem key={agent._id} agent={agent} sender={sender} receiver={receiver} />
                        })}
                    </div>
                </>
            }
        </div>
    )
}

export default AgentResult