import React, { useEffect, useState } from 'react'
import ReceiverItem from './ReceiverItem';
const host = process.env.REACT_APP_SERVER_HOST_URL;
export default function Receiver(props) {
    //getting sender id from props
    const { id } = props
    //state for all receiver details
    const [receiver, setreceiver] = useState([])
    //state for loading
    const [loading, setloading] = useState(true)
    //state for sender details
    const [sender, setsender] = useState({})
    //function for getting all receiver of a sender (user connected)
    const getReceiver = async () => {
        //api call
        const response = await fetch(`${host}/api/messages/getReceiver`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ from: id })

        });
        const json = await response.json();
        //when  get the all receivers succussfully.
        if (json.success) {
            // api output
            let array_receiver = json.receivers;
            // array for getting all receiver detail
            let new_receiver = []

            // object for getting sender detail
            let newSender = {};

            for (let index = 0; index < array_receiver.length; index++) {

                const element = array_receiver[index];

                //if current sender id equal to (user connected)sender    
                if (id === element.sender) {
                    new_receiver.push({ id: element.receiver, name: element.receiverName, type: element.receiverType })
                    newSender = { id: element.sender, name: element.senderName, type: element.senderType };
                }
                // else current sender is receiver
                else {
                    new_receiver.push({ id: element.sender, name: element.senderName, type: element.senderType })
                    newSender = { id: element.receiver, name: element.receiverName, type: element.receiverType };
                }

            }
            setsender(newSender) // setting the sender
            setreceiver(new_receiver); //settng the receiver
        }
        else {
            alert("Internal server error");
        }
        setloading(false)
    }

    // call the getReceiver when page is render
    useEffect(async () => {
        await getReceiver();
    }, [])

    return (
        <>
            {
                !loading ? 
                    (
                        receiver.length > 0 
                        ?  
                        receiver.map((rec) => <ReceiverItem key={rec._id} receiver={rec} sender={sender} />) 
                        : 
                        <div className='d-flex flex-column align-items-center text-dark px-2'>
                            <h3>No Chat to show currently</h3>
                        </div>
                    )
                : 
                <></>
            }
        </>
            
    )
}
