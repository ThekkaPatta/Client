import { Button } from 'react';
import React from 'react'
import axios from 'axios';


export default function Notification({closenotificationmodal} ) {
  // const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button  style={{width: "25px",paddingTop:"0px",marginTop:"0px", float:"right"}} className="btn btn-danger" onClick={closenotificationmodal}>X</button>
        <div className='tite'><h3>
          Notifications</h3></div>
        <div className='body'>
        </div>
      </div>
    </div>
  )
}