import React from 'react'
import images from '../images'

function ApartmentItem(props) {
 // Destructuring apartment   from props
    const { apartement, index, deleteApartment } = props;
    let no = index % 9;

    return (
        <div className="card" style={{ width: "50vw", margin: "30px auto" }}>
            <img src={images[no]} className="card-img-top " style={{ maxHeight: '200px' }} alt="..." />
            <div className="card-body row">
                <h6 className="col-md-4  my-2 "><b>Price - </b>&#8377; {apartement.price}</h6>
                <h6 className="col-md-4  my-2 "><b>Area - </b>{apartement.area}</h6>
                <h6 className="col-md-4  my-2 "><b>Size - </b> {apartement.size}</h6>
                <h6 className="col-md-4  my-2 "><b> No. of bedrooms - </b>{apartement.bedrooms}</h6>
                <h6 className="col-md-4  my-2 "><b>Type - </b> {apartement.type}</h6>
                <h6 className="col-md-4  my-2 "><b>Availability - </b>{apartement.availability}</h6>
                <button className="btn btn-danger col-md-4 mx-auto my-2" onClick={() => deleteApartment(apartement._id)}>Delete</button>
            </div>
        </div>
    )
}

export default ApartmentItem