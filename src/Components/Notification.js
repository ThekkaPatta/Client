import { Button } from 'react';
import React from 'react'

export default function Notification({ closenotificationmodal }) {
  // const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <br></br>
        <div className='tite'><h3>
          Notifications</h3></div>
        <div className='body'><p>This is where all the notifications will be</p></div>
        <div className='footer'>
          <Button
            className="btn btn-danger"
            onClick={closenotificationmodal}
            style={{ margin: "10px" }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}