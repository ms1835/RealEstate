import React from 'react'

// import addBuyer from './addBuyer'

function Agent(props) {
    return (
        <>
        <div className="wrapper p-5">
            <h1 className='text-center'>Agent</h1>
            <h4>Search Available Properties</h4>
            <form>
                <div className='form-group'>
                    <label>Address:</label> 
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>City:</label> 
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>State:</label> 
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Bedrooms:</label> 
                    <input type='number' className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Price:</label> 
                    <input type='number' className='form-control' />
                </div>
                <div className='form-group'>
                    <input type='submit' value='search' className='btn btn-success btn-block' />
                </div>
                
            </form>
            <div>
                <button className='btn btn-info' onClick={()=> props.history.push('/addBuyer')}>Add New Buyer</button>
            </div>
        </div>
        
        </>
    )
}
export default Agent