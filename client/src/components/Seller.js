import React,{Component} from 'react'
import axios from 'axios'
import {SellerTable} from './DataTable'

class Seller extends Component {
    constructor(props){
        super(props)
        this.state = {sellerCollection: []}
    }
    componentDidMount(){
        axios.get('http://localhost:3000/deal')
        .then((res) => {
            this.setState({sellerCollection: res.data})
        }).catch((error) => {
            console.log(error)
        })
    }
    sellerTable(){
        return this.state.sellerCollection.map((data,i) => {
            return <SellerTable obj={data} key={i} />
        })
    }


    render(){
        return(
            <div className='container my-4'>
                <h2 className='text-center'>Sellers</h2>
                <table className='table table-striped table-secondary table-bordered'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Mobile</td>
                            <td>Aadhaar</td>
                            <td>Address</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.sellerTable()}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}

export default Seller