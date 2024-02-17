import React, { useEffect, useState, useContext } from 'react'
import Spinner from '../Spinner'
import UserItem from './UserItem';
import AlertContext from '../context/AlertContext'
import ALert from '../Alert';

const host = process.env.REACT_APP_SERVER_HOST_URL;


function ViewUser() {

    const context = useContext(AlertContext);         // context API for custom alerts
    const { addAlert } = context;                   //  destructuring addAlert from AlertContext

    const [buyers, setbuyer] = useState([]);    // use state for setting buyer details
    const [sellers, setseller] = useState([]);  // use state for setting seller details
    const [agents, setagent] = useState([]);    // use state for setting agent details 
    const [isLoading, setLoading] = useState(true)    // checking content loading


    //function for  users deletion
    const handleOnclick = async (id, userType) => {   
        
        //API call for deleting a user
        const response = await fetch(
            `${process.env.REACT_APP_SERVER_HOST_URL}/api/auth/${userType}/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': localStorage.getItem('token')
                },
            }
        );

        const json = await response.json();

        if (json.success) {
            addAlert({
                type: 'success',
                msg: 'User Deleted Successfully'
            })
        }
        else {
            addAlert({
                type: 'danger',
                msg: json.error
            })
            return;
        }
         //  Deleting buyer  from buyerState in frontend
        if (userType === 'buyer') {
            const newbuyers = buyers.filter((buyer) => { return buyer._id !== id })
            setbuyer(newbuyers)
        }
             //  Deleting seller  from sellerState in frontend
        else if (userType === 'seller') {
            const newsellers = sellers.filter((seller) => { return seller._id !== id })
            setseller(newsellers)
        }
           //  Deleting agent  from agentState in frontend
        else {
            const newagents = agents.filter((agent) => { return agent._id !== id })
            setagent(newagents)
        }
    }
 
    // API call for getting all agents details 
    const getUser = async () => {
        let responce = await fetch(`${host}/api/auth/agent/alluser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        let output = await responce.json();
        setagent(output);

    // API call for getting all buyers details   
        responce = await fetch(`${host}/api/auth/buyer/alluser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        output = await responce.json();
        setbuyer(output);

    // API call for getting all seller details 
        responce = await fetch(`${host}/api/auth/seller/alluser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        output = await responce.json();
        setseller(output);
        setLoading(false)       // updating state of setLoading
    }

    useEffect(() => {
        getUser();  // calling getUser()
    }, [])

    return (
        <>
        <ALert/>
        <div className='row' style={{ overflowX: 'hidden' }}>
            <div className='col-md-4'>
                {isLoading && <Spinner />}
                {!isLoading && buyers.length == 0 ? <h2 style={{ margin: 'auto' }}>No Buyer</h2> : <div className='col-md-3 ' style={{}}><h2 style={{ margin: 'auto',fontWeight: 'bold',color: '#8c4848' }}>Buyer</h2>
                    <div className="d-flex flex-column">
                        {buyers.map((buyer, index) => {
                            return <UserItem key={buyer.id} id={buyer._id} users={buyer} index={index} userType={'buyer'} handleOnclick={handleOnclick} />
                        })}
                    </div>
                </div>}
            </div>

            <div className='col-md-4'>
                {!isLoading && sellers.length == 0 ? <h2 style={{ margin: 'auto' }}>No Seller</h2> : <div className='col-md-3 ' style={{}} ><h2 style={{ margin: 'auto',fontWeight: 'bold',color: '#8c4848' }} >Seller</h2>
                    <div className="d-flex flex-column">
                        {sellers.map((seller, index) => {
                            return <UserItem key={seller.id} id={seller._id} users={seller} index={index} userType={'seller'} handleOnclick={handleOnclick} />
                        })}
                    </div>
                </div>}
            </div>

            <div className='col-md-4'>
                {!isLoading && agents.length == 0 ? <h2 style={{ margin: 'auto' }}>No Agent</h2> : <div className='col-md-3' style={{}}><h2 style={{ margin: 'auto',fontWeight: 'bold',color: '#8c4848' }}>Agent</h2>
                    <div className="d-flex flex-column">
                        {agents.map((agent, index) => {
                            return <UserItem key={agent.id} id={agent._id} users={agent} index={index} userType={'agent'} handleOnclick={handleOnclick} />
                        })}
                    </div>
                </div>}
            </div>
        </div>
        </>
    )
}

export default ViewUser