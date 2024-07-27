import React, { useContext } from 'react'
import AlertContext from './context/AlertContext'

// && is same as c++ && if first is false do not check second
function Alert() {

    // using to accessed data without passing the props down manually to each level(component hierarch)
    const context = useContext(AlertContext);
    const { alert, addAlert } = context; // getting alert(state) and addlert(fnction)

    // after 5 sec removing alert
    setTimeout(() => {
        addAlert(null);
    }, 20000);


    return (
        <div className='position-absolute' style={{  zIndex: 3, width: 'max-content', float: 'right', right: 5}}>
            {
            alert && 
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    {alert.msg}
                </div>
            }
        </div>
    )
}

export default Alert
