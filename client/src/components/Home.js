import React from 'react'
import image from '../realEstate.jpeg'
// import {createBrowserHistory as history} from 'history'
import {Button} from 'react-bootstrap'
// import propertyForm from './propertyForm'

function Home(props) {
    return(
        <>
        <div className="App">
            <h1>Home page</h1>
        </div>
        <div>
            <img src={image} alt='' />
        </div>
        <div>
            <Button variant='btn btn-dark' onClick={()=> props.history.push('/propertyForm')}>Add new Property</Button>
            <Button variant='btn btn-dark' onClick={()=> props.history.push('/Agent')}>Agent Login</Button>
            <Button variant='btn btn-dark' onClick={()=> props.history.push('/Manager')}>Manager Login</Button>
        </div>
        </>
    )
    
}

export default Home