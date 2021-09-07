import { React, useEffect, useState } from "react";
import axios from 'axios';
import '../../assets/css/Worker/workerhome.css'
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

    useEffect(() => {
        if (work !== null) {
            const result = work.filter(function (mywork) {
                return !biddedworks.some(function (mybids) {
                    return mywork._id === mybids.Wid
                })
            })

            Setmybiddedwork(result)
            console.log(work)
            console.log(result)
        }
    }, [work, biddedworks])

    return (
        <div className="containerworkerhome">
            <div className='worksearch-box'>
                <input className='worksearch-text' type='text' name='' placeholder='Type to search'
                    value={search} onChange={(event) => { setSearch(event.target.value) }}></input>
                <a className='worksearch-btn' href='#'><i className='fa fa-search'></i></a>
            </div>

            <div className="wrapper">

                {
                    mybiddedwork.filter((mywork) => {
                        if (mywork.status.toLowerCase().includes(workstate.toLowerCase()) && search == "") {
                            return mywork
                        }
                        else if (mywork.status.toLowerCase().includes(workstate.toLowerCase()) && mywork.WorkTitle.toLowerCase().includes(search.toLowerCase())) {
                            return mywork
                        }
                        else if (mywork.status.toLowerCase().includes(workstate.toLowerCase()) && mywork.Workdescription.toLowerCase().includes(search.toLowerCase())) {
                            return mywork
                        }

                    }).map((mywork) => {
                        return (
                            <div class="row product-list">
                                <section class="panel">
                                    <div class="pro-img-box">
                                        <img src={"http://localhost:550/"+ mywork.WorkImg} alt="" />
                                        <div className='openworkd'>
                                            <div class="sworkdescription">
                                                <i class="fa fa-eye"></i>
                                            </div>
                                            <div className='content'>
                                                <h2 style={{ color: 'Green' }}>Work Description</h2>
                                                <p style={{ color: "black", fontSize: '15px' }}> {mywork.Workdescription}</p>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="panel-body text-center">
                                        <p class="wTitle">{mywork.WorkTitle}</p>
                                        <Link to={"/bidwork/"+mywork._id}><button id='btnbid' className="btn btn-outline-success" > Bid</button></Link>
                                    </div>
                                </section>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}
