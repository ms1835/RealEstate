import React from 'react'


function Manager() {
    return(
        <>
        <div className="wrapper p-5">
            <h1 className='text-center'>Manager</h1>
            <h4>Agent's Performance</h4>
            <form>
                <div className='form-group'>
                    <label>Sales Data:</label>
                    <input type='text' className='form-control' />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Get Data' className='btn btn-info' />
                </div>
                <div className='form-group'>
                    <input type='submit' value='All Sales' className='btn btn-info' />
                </div>
                <div className='form-group'>
                    <input type='submit' value='All Agents' className='btn btn-info' />
                </div>
                
            </form>
        </div>
        </>
    )
    
}

export default Manager