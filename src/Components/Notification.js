import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function Notification({ closenotificationmodal }) {
  const [Username, setUsername] = useState('');
  const [notifications, setnotifications] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("userType") === "user") {
      axios.get("http://localhost:550/notifications/user/" + Username)
        .then((response) => {
          setnotifications(response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else if (localStorage.getItem("userType") === "worker") {
      axios.get("http://localhost:550/notifications/worker/" + Username)
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
      axios.get("http://localhost:550/user/single/" + u_id)
        .then((response) => {
          setUsername(response.data.UUsername)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else if (localStorage.getItem('userType') === 'worker') {
      var w_id = localStorage.getItem('_id');
      axios.get("http://localhost:550/worker/single/" + w_id)
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
          Notifications</h3></div>
        <br></br><br></br>
        <div className='body'>
          {(() => {
            if (localStorage.getItem('userType') === 'user') {
              return (
                notifications.map(mynotifications => {
                  return (
                    // <>
                    // {(()=> {
                    //   if(mynotifications.nType==='Hire'){
                    <Card>
                      <Card.Body>There has been a bid on you work <h3>{mynotifications.Wtitle}
                      </h3> worker <h4>{mynotifications.WUsername}</h4>
                      </Card.Body>
                    </Card>
                    //   }

                    // }
                    // )}
                    // </>
                  )

                })
              )
            }
            else if (localStorage.getItem('userType') === 'worker') {
              return (
                notifications.map(mynotifications => {
                  return (
                    <>
                      {(() => {
                        if (mynotifications.nType === 'rate') {
                          <Card>
                            <Card.Body>You Have Been rated By <h3>{mynotifications.UUsername}
                            </h3> User with Rate Number<h4>{mynotifications.Ratenum}</h4>
                            </Card.Body>
                          </Card>

                        }

                        if (mynotifications.nType === 'Hire') {
                          <Card>
                            <Card.Body>You Have Been Hired By{mynotifications.UUsername}
                            </Card.Body>
                          </Card>

                        }

                      })}
                    </>

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