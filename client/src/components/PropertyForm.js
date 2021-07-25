import axios from 'axios'
import React,{Component} from 'react'


export default class PropertyForm extends Component {
    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeMobile = this.onChangeMobile.bind(this)
        this.onChangeAadhaar = this.onChangeAadhaar.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
        this.onChangePrice = this.onChangePrice.bind(this)
        this.onChangeAddressP = this.onChangeAddressP.bind(this)
        this.onChangeCity = this.onChangeCity.bind(this)
        this.onChangeState = this.onChangeState.bind(this)
        this.onChangeArea = this.onChangeArea.bind(this)
        this.onChangeFloor = this.onChangeFloor.bind(this)
        this.onChangeRoom = this.onChangeRoom.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name:'',
            mobile:'',
            aadhaar:'',
            address:'',
            price:'',
            addressP:'',
            city:'',
            state:'',
            area:'',
            floor:'',
            room:''
        }
    }

    onChangeName(e){
        this.setState({name: e.target.value})
    }
    onChangeMobile(e){
        this.setState({mobile: e.target.value})
    }
    onChangeAadhaar(e){
        this.setState({aadhaar: e.target.value})
    }
    onChangeAddress(e){
        this.setState({address: e.target.value})
    }
    onChangePrice(e){
        this.setState({price: e.target.value})
    }
    onChangeAddressP(e){
        this.setState({addressP: e.target.value})
    }
    onChangeCity(e){
        this.setState({city: e.target.value})
    }
    onChangeState(e){
        this.setState({state: e.target.value})
    }
    onChangeArea(e){
        this.setState({area: e.target.value})
    }
    onChangeFloor(e){
        this.setState({floor: e.target.value})
    }
    onChangeRoom(e){
        this.setState({room: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const sellerObject = {
            name: this.state.name,
            mobile: this.state.mobile,
            aadhaar: this.state.aadhaar,
            address: this.state.address
        }
        const propertyObject = {
            price: this.state.price,
            addressP: this.state.addressP,
            city: this.state.city,
            state: this.state.state,
            area: this.state.area,
            floor: this.state.floor,
            room: this.state.room
        }
        axios.post('http://localhost:3000/deal/seller',sellerObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
        axios.post('http://localhost:3000/users/property',propertyObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })

        this.setState({name:''})
        this.setState({mobile:''})
        this.setState({aadhaar:''})
        this.setState({address:''})
        this.setState({price:''})
        this.setState({addressP:''})
        this.setState({city:''})
        this.setState({state:''})
        this.setState({area:''})
        this.setState({floor:''})
        this.setState({room:''})
    }



    // const [name,setName] = useState('')

    // function handleChange(e){
    //     setName(e.target.value)
    // }
    // function handleSubmit(e){
    //     // e.preventDefault()
    //     // setName('')
    //     let databody = {
    //         name: this.state.name
    //     }
    //     return fetch('http://localhost:3000/property',{
    //         method:'POST',
    //         body:JSON.stringify(databody),
    //         headers: {
    //             'Content-Type':'Application/json'
    //         },
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }

    render(){
        return(
            <div style={{ display: 'block', 
            width: 700, 
            padding: 30 }}>
                <h1 className='text-center'>Add Property</h1>
                <form method='POST' action='./property' onSubmit={this.onSubmit}>
                    <div>
                        <h3>Seller Information</h3>
                        <div className='form-group'>
                            <label>Name:</label> 
                            <input className='form-control' type='text' name='name' value={this.state.name} onChange={this.onChangeName}/>
                        </div>
                        <div className='form-group'>
                            <label>Mobile:</label> 
                            <input className='form-control' type='number' name='mobile' value={this.state.mobile} onChange={this.onChangeMobile}/>
                        </div>
                        <div className='form-group'>
                            <label>Aadhaar:</label> 
                            <input className='form-control' type='text' name='aadhaar' value={this.state.aadhaar} onChange={this.onChangeAadhaar}/>
                        </div>
                        <div className='form-group'>
                            <label>Address:</label> 
                            <input className='form-control' type='text' name='address' value={this.state.address} onChange={this.onChangeAddress}/>
                        </div>
                    </div>
                    <div>
                        <h3>Property Information</h3>
                        <div className='form-group'>
                            <label>Price:</label> 
                            <input className='form-control' type='text' name='price' value={this.state.price} onChange={this.onChangePrice}/>
                        </div>
                        <div className='form-group'>
                            <label>Address:</label> 
                            <input className='form-control' type='text' name='addressP' value={this.state.addressP} onChange={this.onChangeAddressP}/>
                        </div>
                        <div className='form-group'>
                            <label>City:</label> 
                            <input className='form-control' type='text' name='city' value={this.state.city} onChange={this.onChangeCity}/>
                        </div>
                        <div className='form-group'>
                            <label>State:</label> 
                            <input className='form-control' type='text' name='state' value={this.state.state} onChange={this.onChangeState}/>
                        </div>
                        <div className='form-group'>
                            <label>Area:</label> 
                            <input className='form-control' type='text' name='area' value={this.state.area} onChange={this.onChangeArea}/>
                        </div>
                        <div className='form-group'>
                            <label>Floors:</label> 
                            <input className='form-control' type='number' name='floor' value={this.state.floor} onChange={this.onChangeFloor}/>
                        </div>
                        <div className='form-group'>
                            <label>Rooms:</label> 
                            <input className='form-control' type='number' name='room' value={this.state.room} onChange={this.onChangeRoom}/>
                        </div>
                    </div>
                    <button className='btn btn-info btn-block' type='submit' value='submit' >Add Property</button>
                </form>
            </div>
        )
    }
    
}

// export default PropertyForm