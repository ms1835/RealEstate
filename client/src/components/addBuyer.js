import React from 'react'
import {Button,Form} from 'react-bootstrap'

function addBuyer() {
    return(
        <div style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
            <h1>Add Buyer</h1>
            <Form>
                <div>
                    <h3>Buyer Information</h3>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mobile:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Aadhaar:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                </div>
                <div>
                    <h3>Property Information</h3>
                    <Form.Group>
                        <Form.Label>Property ID:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sell Date:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Sold By:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                    
                </div>
                <Button type='submit' value='submit' >Add Buyer</Button>
            </Form>
        </div>
    )
}

export default addBuyer