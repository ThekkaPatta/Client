import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import '../assets/css/Notification.css'

export default function Notification({ closenotificationmodal }) {
  const [Username, setUsername] = useState('');
  const [notifications, setnotifications] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("userType") === "user") {
      axios.get("https://thekkapatta.herokuapp.com/notifications/user/" + Username)
        .then((response) => {
          setnotifications(response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else if (localStorage.getItem("userType") === "worker" && Username !== '') {
      axios.get("https://thekkapatta.herokuapp.com/notifications/worker/" + Username)
        .then((response) => {
          setnotifications(response.data.data)
          console.log(response.data.data)
        })
        
        .catch(err => {
          console.log(err)
        })
    }
  }, [Username])


  useEffect(() => {
    if (localStorage.getItem('userType') === 'user') {
      var u_id = localStorage.getItem('_id');
      axios.get("https://thekkapatta.herokuapp.com/user/single/" + u_id)
        .then((response) => {
          setUsername(response.data.UUsername)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else if (localStorage.getItem('userType') === 'worker') {
      var w_id = localStorage.getItem('_id');
      axios.get("https://thekkapatta.herokuapp.com/worker/single/" + w_id)
        .then((response) => {
          setUsername(response.data.WUsername)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])



  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button style={{ width: "25px", paddingTop: "0px", marginTop: "0px", float: "right" }}
          className="btn btn-danger" onClick={closenotificationmodal}>X</button>
        <div className='tite'><h3>
          <b>Notifications</b></h3></div>
        <div className='notificationcontainer'>
          {(() => {
            if (localStorage.getItem('userType') === 'user') {
              return (
                notifications.map(mynotifications => {
                  return (
                    <div className='usernoti'>
                      There has been a bid on you work &nbsp;<b>{mynotifications.Wtitle} </b> &nbsp; by worker &nbsp;<b>{mynotifications.WUsername}</b>
                    </div>
                  )

                })
              )
            }
            else if (localStorage.getItem('userType') === 'worker') {
              return (
                notifications.map(mynotifications => {
                  return (
                    <div>
                      {(()=>{
                        if(mynotifications.nType === 'Hire'){
                          return (
                            <div className='wnotihire'>
                              You have been hired by &nbsp;<b>{mynotifications.UUsername} </b> &nbsp; for work &nbsp;<b>{mynotifications.Wtitle}</b>
                            </div>
                          )
                        }
                        else if(mynotifications.nType === 'Rate'){
                          <div className='wnotirate'>
                              <p>You have been rated</p>
                            </div>
                        }
                        else{

                        }
                      })()

                      }
                    </div>

                  )

                })
              )
            }
          })()}
        </div>
      </div>
    </div>
  )
}