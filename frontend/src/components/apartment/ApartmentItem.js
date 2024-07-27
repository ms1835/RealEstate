import React from 'react'
import images from '../images'
import { Link } from "react-router-dom";
function ApartmentItem(props) {

    const { apartement, index } = props;   // destructuring apartment and index from props passed from aprtmentResult
    let no = index % 9;      // to show images between 0 to 8 

    return (
        <div className="card w-50 mb-5">
            <img src={images[no]} className="card-img-top " style={{ maxHeight: '300px' }} alt="..." loading='lazy' />
            <div className="card-body row">
                <h6 className="col-md-4  my-2 "><span style={{color:'brown'}}>Price</span> - {apartement.price}</h6>
                <h6 className="col-md-4  my-2 "> <span style={{color:'brown'}}>Area</span> - {apartement.area}</h6>
                <h6 className="col-md-4  my-2 "><span style={{color:'brown'}}> Size</span> - {apartement.size}</h6>
                <h6 className="col-md-4  my-2 "><span style={{color:'brown'}}>No. of bedrooms</span> - {apartement.bedrooms}</h6>
                <h6 className="col-md-4  my-2 "><span style={{color:'brown'}}>Type</span> - {apartement.type}</h6>
                <Link 
                    className="btn col-md-4  my-2 text-white" 
                    to={'/property'} 
                    state={{ apartement: apartement, index: no }} 
                    role="button" 
                    aria-disabled="true"
                    style={{background: "rgba(35, 66, 74)"}}
                    >
                        View Details
                </Link >
            </div>
        </div>
    )
}

export default ApartmentItem