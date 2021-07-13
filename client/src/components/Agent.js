import React from 'react'
import {Button,Form} from 'react-bootstrap'
// import addBuyer from './addBuyer'

function Agent(props) {
    return (
        <>
        <div className="App">
            <h1>Agent</h1>
        </div>
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
            <h4>Search Available Properties</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Address:</Form.Label> 
                    <Form.Control type='text' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City:</Form.Label> 
                    <Form.Control type='text' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>State:</Form.Label> 
                    <Form.Control type='text' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bedrooms:</Form.Label> 
                    <Form.Control type='number' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price:</Form.Label> 
                    <Form.Control type='number' />
                </Form.Group>
                <Button>Search</Button>
                
            </Form>
        </div>
        <div>
            <Button onClick={()=> props.history.push('/addBuyer')}>Add New Buyer</Button>
        </div>
        </>
    )
}
export default Agent