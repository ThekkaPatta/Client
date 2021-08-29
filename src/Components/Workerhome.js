import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../assets/css/workerhome.css'
import { Link } from "react-router-dom";

export default function Workerhome() {
    const [work, setWork] = useState([]);
    const [biddedworks, setBiddedworks] = useState([]);
    const [search, setSearch] = useState('');
    const [workstate] = 'Pending';
    const [WUsername, setWUsername] = useState('');
    const [mybiddedwork, Setmybiddedwork] = useState([])

    const wid = localStorage.getItem('_id');

    useEffect(() => {
        const getWorker = async () => {
            try {
                const res = await axios.get("http://localhost:550/worker/single/" + wid)
                setWUsername(res.data.WUsername);

                const result = await axios.get('http://localhost:550/work/show')
                setWork(result.data)

            }
            catch (err) {
                console.log(err)

            }
        }
        getWorker();
    }, [])


    useEffect(() => {
        if (WUsername !== '') {
            const getBiddedwork = async () => {

                try {
                    const res = await axios.get('http://localhost:550/bidded/work/' + WUsername)
                    setBiddedworks(res.data)
                }

                catch (err) {
                    console.log(err)
                }

            }
            getBiddedwork();

        }

    }, [WUsername])

    useEffect(()=>{
        if(work!== null){
            const result = work.filter(function (mywork) {
                return !biddedworks.some(function (mybids) {
                    return mywork._id === mybids.Wid
                })
            })

            Setmybiddedwork(result)
        }
    },[work,biddedworks])

    return (
        <div className="container">
            <div classNamer="row p-5">
                <div className="col p-5">
                    <br></br><br></br><br></br>
                    <input type='text' placeholder='Search Bar' value={search}
                        onChange={(event) => { setSearch(event.target.value) }} />
                    <div class="wrapper">
                        {

                            mybiddedwork.filter((mywork) => {
                                if (mywork.status.toLowerCase().includes(workstate.toLowerCase()) && search == "") {
                                    return mywork
                                }
                                else if (mywork.status.toLowerCase().includes(workstate.toLowerCase()) && mywork.Tags.toLowerCase().includes(search.toLowerCase())) {
                                    return mywork
                                }
                                else if (mywork.status.toLowerCase().includes(workstate.toLowerCase()) && mywork.Workdescription.toLowerCase().includes(search.toLowerCase())) {
                                    return mywork
                                }

                            }).map((mywork) => {
                                return (
                                    <div className="card">
                                        <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"http://localhost:550/" + mywork.WorkImg} />
                                        <h4 className="card-title p-2">{mywork.Tags}</h4>
                                        <h5 className="card-title p-3">{mywork.Workdescription}</h5>
                                        <h2><Link to={"/bidwork/" + mywork._id}> Bid Now </Link></h2>
                                        <br></br><br></br><br></br>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}