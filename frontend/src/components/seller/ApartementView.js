import React, { useEffect, useState, useContext } from 'react'
import Loader from '../Loader'
import ApartmentItem from './ApartmentItem';
import AlertContext from '../context/AlertContext'
import Alert from '../Alert';
const host = process.env.REACT_APP_SERVER_HOST_URL;

function ApartementView(props) {
   //it is for handle the state of  apartment
    const [apartements, setApartements] = useState([]);
    //state for loadding
    const [isLoading, setLoading] = useState(true)
    //context api for alert message
    const context = useContext(AlertContext);
    // Destructuring alert and addAlert  from context api
    const { addAlert } = context;
    //get all apartment of logined user(seller)
    const getApartment = async () => {
        const responce = await fetch(`${host}/api/apartment/fetchSellerApartment`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });

        const output = await responce.json();
        setApartements(output);
        setLoading(false)
    }

    //delete apartment by taking the id of apartment which seller want to delete
    const deleteApartment = async (id) => {

        //API call to delete aprtment
        const response = await fetch(`${host}/api/apartment/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        
        const json = await response.json()
        //delete aprtment from apartment state
        const newAprtments = apartements.filter((apartement) => { return apartement._id !== id })
        //set new apartment in apartment state
        setApartements(newAprtments)
        if (json.success) {
            addAlert({
                type: 'success',
                msg: 'Apartment deleted successfully'
            })
        }
        else {
            addAlert({
                type: 'danger',
                msg: json.error
            })
        }


    }

    // /Runs only on the first render page to get all apartment
    useEffect(() => {
        getApartment();
    }, [])
    return (
            <div className='container-fluid'>
                {
                    isLoading ? <Loader /> :
                    apartements.length === 0 ? <h2 className='font-weight-bold'>There is currently no property listed.</h2> : <div><div className='dashboard-top text-white'>Your Listed Apartments </div>
                        <Alert />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            {apartements.map((apartement, index) => {
                                return <ApartmentItem key={apartement._id} apartement={apartement} index={index} deleteApartment={deleteApartment} />
                            })}
                        </div>
                    </div>
                }
            </div>
    )
}

export default ApartementView