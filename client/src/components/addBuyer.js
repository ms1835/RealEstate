import React,{Component} from 'react'
import axios from 'axios'

class addBuyer extends Component {
    constructor(props){
        super(props)

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeMobile = this.onChangeMobile.bind(this)
        this.onChangeAadhaar = this.onChangeAadhaar.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
        this.onChangePid = this.onChangePid.bind(this)
        this.onChangeSellDate = this.onChangeSellDate.bind(this)
        this.onChangeSoldBy = this.onChangeSoldBy.bind(this)

        this.state = {
            name: '',
            mobile: '',
            aadhaar: '',
            address: '',
            pid: '',
            sellDate: '',
            soldBy: ''
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
    onChangePid(e){
        this.setState({pid: e.target.value})
    }
    onChangeSellDate(e){
        this.setState({sellDate: e.target.value})
    }
    onChangeSoldBy(e){
        this.setState({soldBy: e.target.value})
    }  
        

    onsubmit(e){
        e.preventDefault()
        const buyerObject = {
            name: this.state.name,
            mobile: this.state.mobile,
            aadhaar: this.state.aadhaar,
            address: this.state.address,
            pid: this.state.pid,
            sellDate: this.state.sellDate,
            soldBy: this.state.soldBy,
        }

        axios.post('http://localhost:3000/add/buyer',buyerObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })

        this.setState({name:''})
        this.setState({mobile:''})
        this.setState({aadhar:''})
        this.setState({address:''})
        this.setState({pid:''})
        this.setState({sellDate:''})
        this.setState({soldBy:''})
    }

    
    render(){
        return(
            <div className="wrapper p-5">
                <h1 className='text-center'>Add Buyer</h1>
                <form method='POST' action='./buyer' onSubmit={this.onSubmit}>
                    <div>
                        <h3>Buyer Information</h3>
                        <div className='form-group'>
                            <label>Name:</label> 
                            <input type='text' className='form-control' name='name' value={this.state.name} onChange={this.onChangeName} />
                        </div>
                        <div className='form-group'>
                            <label>Mobile:</label> 
                            <input type='text' className='form-control' name='mobile' value={this.state.mobile} onChange={this.onChangeMobile} />
                        </div>
                        <div className='form-group'>
                            <label>Aadhaar:</label> 
                            <input type='text' className='form-control' name='aadhaar' value={this.state.aadhaar} onChange={this.onChangeAadhaar} />
                        </div>
                        <div className='form-group'>
                            <label>Address:</label> 
                            <input type='text' className='form-control' name='address' value={this.state.address} onChange={this.onChangeAddress} />
                        </div>
                    </div>
                    <div>
                        <h3>Property Information</h3>
                        <div className='form-group'>
                            <label>Property ID:</label> 
                            <input type='text' className='form-control' name='pid' value={this.state.pid} onChange={this.onChangePid} />
                        </div>
                        <div className='form-group'>
                            <label>Sell Date:</label> 
                            <input type='text' className='form-control' name='sellDate' value={this.state.sellDate} onChange={this.onChangeSellDate}  />
                        </div>
                        <div className='form-group'>
                            <label>Sold By:</label> 
                            <input type='text' className='form-control' name='soldBy' value={this.state.soldBy} onChange={this.onChangeSoldBy} />
                        </div>
                        <div className='form-group'>
                            <input type='submit' value='Add Buyer' className='btn btn-success btn-block' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
    
}

export default addBuyer