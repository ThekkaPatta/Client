import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router"
import '../../assets/css/User/Hiredworker.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function Hiredworker() {
    const routerHistory = useHistory();
    const workid = routerHistory.location.state.workid;
    const WUsername = routerHistory.location.state.WUsername;

    console.log(workid)
    console.log(WUsername)

    const [work, setWork] = useState([])
    const [WUser, setWUser] = useState("")

    useEffect(async () => {
        try {
            const res = await axios.get('https://thekkapatta.herokuapp.com/work/single/' + workid)
            setWork(res.data)

            const result = await axios.get('https://thekkapatta.herokuapp.com/worker/one/' + WUsername)
            setWUser(result.data)
        }
        catch (err) {
            console.log(err)
        }

    }, [])

    const completework = async (workid, WUsername) => {
        try {
            await axios.post('https://thekkapatta.herokuapp.com/complete/work/' + workid)
            toast.success("Work has been successfully completed",{autoClose: 3000})
            routerHistory.push({
                pathname: '/userlanding'
            })
        }
        catch (err) {
            console.log(err)
        }

    }


    return (
        <div className='hiredWorker'>
            <div class='center'>

                {(() => {
                    if (work.status === 'On-going') {
                        return (
                            <>
                                <h2>Work Title <br></br>{work.WorkTitle}</h2>
                                <img className='wimg' src={"https://thekkapatta.herokuapp.com/" + work.WorkImg}></img>

                                <h3>Worker: {work.WFullName}</h3>
                                <h3> Time Remaining: Some time </h3>

                                <button id='btncomplete' className="btn btn-success p-3" onClick={() => {completework(work._id, work.Worker) }}>Confirm complete</button>
                            </>
                        )


                    }

                    else if (work.status === 'Completed') {
                        return (
                            <>
                                <h5>This work has been completed</h5>
                                <h2>Work Title: {work.WorkTitle}</h2>
                                <img src={"https://thekkapatta.herokuapp.com/" + work.WorkImg}></img>
                                <h3>Work Completed by: {WUser.WFullName}</h3>
                            </>
                        )

                    }
                    else {

                    }
                }
                )()}

            </div>

        </div>
    )
}
