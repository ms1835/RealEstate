import React,{Component} from 'react'

class DataTable extends Component {
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    {this.props.obj.city}
                </td>
                <td>
                    {this.props.obj.state}
                </td>
                <td>
                    {this.props.obj.area}
                </td>
                <td>
                    {this.props.obj.floor}
                </td>
                <td>
                    {this.props.obj.room}
                </td>
            </tr>
        )
    }
}

// export default DataTable
class SellerTable extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.mobile}
                </td>
                <td>
                    {this.props.obj.aadhaar}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
            </tr>
        )
    }
}

class BuyerTable extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.mobile}
                </td>
                <td>
                    {this.props.obj.aadhaar}
                </td>
                <td>
                    {this.props.obj.address}
                </td>
                <td>
                    {this.props.obj.pid}
                </td>
                <td>
                    {this.props.obj.sellDate}
                </td>
                <td>
                    {this.props.obj.soldBy}
                </td>
            </tr>
        )
    }
}

export default DataTable
export {SellerTable,BuyerTable}