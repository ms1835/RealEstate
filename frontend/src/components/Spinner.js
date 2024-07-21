import React from 'react'

// Spinner when component is  loading
const Spinner = () => {

    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className="spinner-grow" style={{"width": 200, "height": 200}} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
