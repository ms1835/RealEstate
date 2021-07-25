import React from 'react'
import image from '../realEstate.jpeg'

// import {createBrowserHistory as history} from 'history'

// import propertyForm from './PropertyForm'

function Home(props) {
    return(
        <>
        <div className="container">
            <h1 className='text-center'>Home page</h1>
        
            <div className='my-3'>
                <img src={image} alt='' />
            </div>
            <div>
                <button className='btn btn-dark m-2' onClick={()=> props.history.push('/propertyForm')}>Add new Property</button>
                <button className='btn btn-dark m-2' onClick={()=> props.history.push('/agent')}>Agent Login</button>
                <button className='btn btn-dark m-2' onClick={()=> props.history.push('/manager')}>Manager Login</button>
            </div>
            
            
        </div>
        </>
    )
    
}

export default Home