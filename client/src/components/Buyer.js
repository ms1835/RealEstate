import React,{Component} from 'react'
import axios from 'axios'
import {BuyerTable} from './DataTable'

class Buyer extends Component {
    constructor(props){
        super(props)
        this.state = {buyerCollection: []}
    }
    componentDidMount(){
        axios.get('http://localhost:3000/add')
        .then((res) => {
            this.setState({buyerCollection: res.data})
        }).catch((error) => {
            console.log(error)
        })
    }
    buyerTable(){
        return this.state.buyerCollection.map((data,i) => {
            return <BuyerTable obj={data} key={i} />
        })
    }


    render(){
        return(
            <div className='container my-4'>
                <h2 className='text-center'>Buyers</h2>
                <table className='table table-striped table-bordered table-secondary'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Mobile</td>
                            <td>Aadhaar</td>
                            <td>Address</td>
                            <td>Pid</td>
                            <td>Sell Date</td>
                            <td>Sold By</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.buyerTable()}
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default Buyer