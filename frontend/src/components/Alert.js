import React, { useContext } from 'react'
import AlertContext from './context/AlertContext'

// && is same as c++ && if first is false do not check second
function ALert() {

    // using to accessed data without passing the props down manually to each level(component hierarch)
    const context = useContext(AlertContext);
    const { alert, addAlert } = context; // getting alert(state) and addlert(fnction)

    // after 5 sec removing alert
    setTimeout(() => {
        addAlert(null);
    }, 10000);


    return (
        <div style={{ height: '50px',marginBottom: 8 }}>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                {alert.msg}
            </div>}
        </div>
    )
}

export default ALert
