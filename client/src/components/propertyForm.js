import React from 'react'
import {Button,Form} from 'react-bootstrap'

function propertyForm() {
    return(
        <div style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
            <h1>Add Property</h1>
            <Form>
                <div>
                    <h3>Seller Information</h3>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mobile:</Form.Label> 
                        <Form.Control type='number' />
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
                        <Form.Label>Price:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
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
                        <Form.Label>Area:</Form.Label> 
                        <Form.Control type='text' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Floors:</Form.Label> 
                        <Form.Control type='number' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rooms:</Form.Label> 
                        <Form.Control type='number' />
                    </Form.Group>
                </div>
                <Button type='submit' value='submit' >Add Property</Button>
            </Form>
        </div>
    )
}

export default propertyForm