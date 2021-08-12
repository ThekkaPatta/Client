import React from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import io from 'socket.io-client'

var Username, notifications = [];
export default function Notification({ closenotificationmodal }) {
  var u_id = localStorage.getItem('_id');

  axios.get("http://localhost:550/user/single/" + u_id)
    .then((response) => {
      Username = response.data.UUsername
    })
    .then(() => {
      axios.get("http://localhost:550/notifications/user/" + Username)
        .then((response) => {
          notifications = response.data.data
          console.log(notifications)
        })
    })
    .catch(err => {
      console.log(err)
    })

    const socket = io.connect("http://localhost:550");





  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button style={{ width: "25px", paddingTop: "0px", marginTop: "0px", float: "right" }}
          className="btn btn-danger" onClick={closenotificationmodal}>X</button>
        <div className='tite'><h3>
          Notifications</h3></div>
        <br></br><br></br>
        <div className='body'>
          {
            notifications.map(mynotifications => {
              return (
                <Card>
                  <Card.Body>There has been a bid on you work {mynotifications.Wtitle} worker {mynotifications.WUsername}
                  </Card.Body>
                </Card>
              )
            })

          }
        </div>
      </div>
    </div>
  )
}