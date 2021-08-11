import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
// import socketIOClient from "socket.io-client";

var notid
export default function Notification({ closenotificationmodal }) {
  const [userName, setUsername] = useState();
  const [notifications  , setNotification] = useState([]);
  
  useEffect(() => {
  
    var u_id = localStorage.getItem('_id');

    axios.get("http://localhost:550/user/single/" + u_id)
      .then((response) => {
        setUsername(response.data.UUsername)
        // Username = response.data.UUsername
      })
      .catch(err => {
        console.log(err)
      })

      // const socket = socketIOClient("http://localhost:550");
      // // socket.connect()
      // socket.on("FromAPI", data => {
      // console.log(data);
      // setResponse(res => [...res, data]);
    // });

  }, []);
  useEffect(() => {
    const socket = socketIOClient("http://127.0.0.1:550");
    socket.on("FromAPI", data => {
      console.log(data);
    });
  }, []);
  useEffect(()=>{
    if(userName!==undefined){
      axios.get("http://localhost:550/notifications/user/" + userName)
    .then((response) => {
      console.log("Not res",response)
      setNotification(
         response.data.data
      )
      console.log(notifications)
    })
    }
    
  }, userName)

  useEffect(()=>{
    console.log("Notificationss",notifications)
  }, notifications)

    // const socket = io.connect('http://localhost:500')

    // socket.emit('notification',`notification_${u_id}`)

    // const eventEmitter = req.app.get('eventEmitter')
    // eventEmitter.emit('notificationemit',{Title:notifications.data.Wtitle,worker:notifications.data.WUsername})

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
            notifications && 
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