import { React, useEffect, useState } from "react";
import axios from 'axios'
import '../../assets/css/admin/adminshowprofile.css'
import { Link, useParams, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function Workbidder() {
    const id = useParams()
    const routerHistory = useHistory();
    const [bidder, setBidder] = useState([])
    const [status, setStatus] = useState("")
    const [UUsername, setUUsername] = useState([])
    const [Wtitle, setWtitle] = useState([])

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios.get("https://thekkapatta.herokuapp.com/works/bidder/" + id._id)
                setBidder(response.data)

                const res = await axios.get("https://thekkapatta.herokuapp.com/work/single/" + id._id)
                setStatus(res.data.status)
                setWtitle(res.data.WorkTitle)


                var _id = localStorage.getItem('_id');
                const result = await axios.get("https://thekkapatta.herokuapp.com/user/single/" + _id)
                setUUsername(result.data.UUsername)

            }
            catch (err) {
                console.log(err)
            }
        }
        getdata()
    }, [])


    const hire = (WUsername) => {
        const data = new FormData()
        data.append('WUsername', WUsername)
        data.append('Wid', id._id)
        alert(WUsername)

        axios.post("https://thekkapatta.herokuapp.com/hire/worker", data)
            .then(() => {
                toast.success("Worker Successfully Hired",{autoClose: 3000})
                startconversation(WUsername)
            })
            .catch((err) => {
                console.log(err)
                alert("Api not hit")
            })

    }

    const getWUsername = async (WUsername) => {
        try {
            await axios.get('https://thekkapatta.herokuapp.com/worker/one/' + WUsername)
                .then((res) => {
                    startconversation(res.data._id, WUsername)
                })

                .catch((err) => {
                    console.log(err)
                })

        }
        catch (err) {
            console.log(err)
        }

    }

    const startconversation = async (receiverId, WUsername) => {
        var _id = localStorage.getItem('_id');
        const datas = new FormData()
        datas.append('senderId', _id);
        datas.append('receiverId', receiverId);

        if (datas !== null) {
            await axios.post("https://thekkapatta.herokuapp.com/conversation", datas)
                .then((res) => {
                    console.log(res.data)
                    startmessage(WUsername, receiverId, _id)
                })
        }

    }

    const startmessage = async (WUsername, receiverId, senderId) => {
        var conversationId;
        const datac = new FormData()
        datac.append('senderId', senderId);
        datac.append('receiverId', receiverId);

        if (datac !== null) {
            await axios.get("https://thekkapatta.herokuapp.com/getconversation", {
                params: {
                    senderId: senderId, 
                    receiverId: receiverId
                }
            })
                .then((res) => {
                    conversationId=res.data[0]._id;
                })
        }


        const data2 = new FormData()
        data2.append('conversationId', conversationId)
        data2.append('senderId', senderId)
        data2.append('text', 'Hey, I have have you for a work. Please, try to complete it within the time')

        axios.post('https://thekkapatta.herokuapp.com/messages', data2)
            .then(() => {
                toast.success("Conversation started with worker",{autoClose: 3000})
                console.log('conversation started')
                setnotification(WUsername)
            })

    }


    const setnotification = async (WUsername) => {
        const workid = id._id
        const data = new FormData()
        data.append('Workid', workid)
        data.append('WUsername', WUsername)
        data.append('UUsername', UUsername)
        data.append('Wtitle', Wtitle)
        data.append('nType', "Hire")

        axios.post("https://thekkapatta.herokuapp.com/post/notification", data)
            .then((response) => {
                console.log(response.data.message);
                routerHistory.push({
                    pathname: '/hiredworker',
                    state: {
                        workid: workid,
                        WUsername: WUsername
                    }
                })
            })

    }

    return (
        <div className="alignment" style={{ marginTop: "10px" }}>
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col" >Username</th>
                        <th scope="col" >Bid Price</th>
                        <th scope="col" >Worktime</th>
                        <th scope="col" >Worker Profile</th>
                        <th scope="col" >Hire</th>

                    </tr>
                </thead>
                {
                    bidder.map((mybidder) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{mybidder.WUsername}</td>
                                    <td>Rs.{mybidder.Bidprice}</td>
                                    <td>{mybidder.Worktime}</td>


                                    <td>
                                        <Link to={"/profile/" + mybidder.WUsername}><button className="btn btn-warning" >View Profile</button></Link>
                                    </td>
                                    <td>
                                        {
                                            status === 'Pending' ?
                                                <button className="btn btn-success" onClick={() => hire(mybidder.WUsername)}>Hire</button>
                                                : ""
                                        }
                                    </td>

                                </tr>
                            </tbody>

                        )
                    })
                }
            </table>
        </div>

    )
}
export default Workbidder