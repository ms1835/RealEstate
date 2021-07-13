import React from 'react'
import {Button,Form} from 'react-bootstrap'

function Manager() {
    return(
        <>
        <div className="App">
            <h1>Manager</h1>
        </div>
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
            <h4>Agent's Performance</h4>
            <Form>
                <Form.Group>
                    <Form.Label>Sales Data:</Form.Label>
                    <Form.Control type='text' />
                </Form.Group>
                <Button>Get Data</Button>
                <Button>All Sales</Button>
                <Button>All Agents</Button>
            </Form>
        </div>
        </>
    )
    
}

export default Manager