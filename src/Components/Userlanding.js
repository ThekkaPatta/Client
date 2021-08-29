import { useEffect, useState } from "react";
import axios from 'axios'
import '../assets/css/Userlanding.css'
import { useHistory } from 'react-router-dom';

function Userhome() {
    const routerHistory = useHistory();

    const [work, setWork] = useState([])
    const [Username, setUsername] = useState('')
    const [workstatus, setWorkstatus] = useState('Pending')


    useEffect(() => {
        if (Username === '') {
            const getUser = async () => {
                var u_id = localStorage.getItem('_id');
                try {
                    const res = await axios.get("http://localhost:550/user/single/" + u_id)
                    setUsername(res.data.UUsername)

                }

                catch (err) {
                    console.log(err)
                }
            }
            getUser();
        }

    }, [])

    useEffect(async() => {
        
        if (Username !== '') {
            await axios.get("http://localhost:550/works/posted/" + Username)    
            .then((res)=>{
                setWork(res.data.data)
                // console.log(res.data.data)
            })
            .catch (err=>{
                console.log(err)
            })
        }
    }, [Username])



    const hiredworker = (workid, WUsername) => {
        routerHistory.push({
            pathname: '/hiredworker',
            state: {
                workid: workid,
                WUsername: WUsername
            }
        })

    }

    return (
        <div className="container-fluid ">

            <h4 className="bg-light p-4" id="projectAnchor">All Bookings</h4>
            <div className="card-deck p-2">
                <br></br><br></br><br></br><br></br>
                <div className='workloader'>
                    <button className="btn btn-outline-info" onClick={() => { setWorkstatus('Pending') }}>Pending works</button>
                    <button className="btn btn-outline-info" onClick={() => { setWorkstatus('On-going') }}>Ongoing-works</button>
                    <button className="btn btn-outline-info" onClick={() => { setWorkstatus('Completed') }}>Comleted Works</button>
                </div>
                {
                    work.filter((myworks) => {
                        if (myworks.status.toLowerCase().includes(workstatus.toLowerCase())) {
                            return myworks
                        }
                    })
                        .map((myworks) => {
                            return (
                                <div className="col-md-4 p-3">
                                    <div className="card">
                                        <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"http://localhost:550/" + myworks.WorkImg} />
                                        <h4 className="card-title p-2">Tag: {myworks.Tags}</h4>
                                        <h4 className="card-title p-2">Work Description: {myworks.Workdescription}</h4>
                                        <div className="text-center p-0">

                                            {(() => {
                                                if (myworks.status === 'Pending') {
                                                    return (
                                                        <a className="btn btn-outline-info p-3" href={"/workbidder/" + myworks._id}>View Bidders</a>
                                                    )


                                                }

                                                else if (myworks.status === 'On-going') {
                                                    return (
                                                        <button className="btn btn-outline-info p-3" onClick={() => { hiredworker(myworks._id, myworks.Worker) }}> See Worker</button>
                                                    )

                                                }
                                                else {

                                                }
                                            }
                                            )()}
                                        </div>
                                    </div>
                                </div>



                            )

                        })

                }

            </div>
        </div>
    )
}
export default Userhome
