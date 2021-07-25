import React,{Component} from 'react'
import axios from 'axios'
import DataTable from './DataTable'




class Property extends Component {
    constructor(props){
        super(props)
        this.state = {propertyCollection: []}
    }

    componentDidMount(){
        axios.get('http://localhost:3000/users')
        .then((res) => {
            this.setState({propertyCollection: res.data})
        }).catch((error) => {
            console.log(error)
        })
    }
    dataTable(){
        return this.state.propertyCollection.map((data,i) => {
            return <DataTable obj={data} key={i} />
        })
    }

    // function Parent() {
    //     const [property,getProperties] = useState('')
    //     const url = 'http://localhost:3001/'
    //     useEffect(() => {
    //         getProperty()
    //     },[])
    
    //     const getProperty = () => {
    //         axios.get(`${url}property`)
    //         .then((res) => {
    //             const allProperty = res.data.properties
    //             getProperties(allProperty)
    //         })
    //         .catch(err => console.log(`Error: ${err}`))
    //     }
    // }

    render() {
        return(
            <>
            <div className='container my-4'>
                <h1 className='text-center'>Registered Property</h1>
                <table className='table table-striped table-bordered table-warning'>
                    <thead className='thead-dark'>
                        <tr>
                            <td>Price</td>
                            <td>Address</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Area</td>
                            <td>Floors</td>
                            <td>Rooms</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dataTable()}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
    
}

export default Property