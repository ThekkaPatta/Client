import { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/workerhome.css'

class Workerhome extends Component {
    state = {
        work: [],
        search: " ",
        workstate: "Pending",
        WUsername: " ",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:550/work/show")

            .then((response) => {
                console.log(response.data)
                this.setState({
                    work: response.data
                })

            })
            .catch()
    }

    // biddedworks = (Wid) => {
    //     var wid = localStorage.getItem('_id');
    //     axios.get("http://localhost:550/worker/single/" + wid)
    //         .then((response) => {
    //             console.log(response)
    //             this.setState({
    //                 WUsername: response.data.WUsername,
    //             })
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })

    //     const data = new FormData
    //     data.append('Wid', Wid)
    //     data.append('WUsername', this.state.WUsername)

    //     axios.post("http://localhost:550/bidded/works", data)
    //         .then((response) => {
    //             console.log("heer")
    //             return response.data.data

    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })

    // }
    render() {
        return (
            <div className="container">
                <div classNamer="row p-5">
                    <div className="col p-5">
                        <br></br><br></br><br></br>
                        <div className="wrap">
<div className="search">
<input type="text" class="searchTerm" placeholder="What are you looking for?"
value={this.state.search}
onChange={(event) => { this.setState({ search: event.target.value }) }} />
</div>
                        </div>
                        <div class="wrapper">
                            {

                                // this.state.work.filter((mywork) => {
                                //     if (this.biddedworks.bind(this,mywork._id)=== null){
                                //         if (mywork.status.toLowerCase().includes(this.state.workstate.toLowerCase()) && this.state.search == "") {

                                //             return mywork
                                //         }
                                //         else if (mywork.status.toLowerCase().includes(this.state.workstate.toLowerCase()) && mywork.Tags.toLowerCase().includes(this.state.search.toLowerCase())) {
                                //             return mywork
                                //         }
                                //         else if (mywork.status.toLowerCase().includes(this.state.workstate.toLowerCase()) && mywork.Workdescription.toLowerCase().includes(this.state.search.toLowerCase())) {
                                //             return mywork
                                //         }
                                //         else { }
                                //     }


                                // })
                                this.state.work.map((mywork) => {
                                    return (
                                        <div class="hero-container">
                                            <div className="main-container">
                                                <div className="poster-container">
                                                    <img class="poster" src={"http://localhost:550/" + mywork.Wimage} />
                                                    <div className="work_container">
                                                        <div className="work-content">
                                                        <h4 class="work-content-title">{mywork.WorkTitle}</h4>
                                                        <p className="work-description">
                                                    {mywork.Workdescription}  
                                                    </p>

                                                    <h4 className="work-tag">{mywork.Tags}</h4>
                                                   
                                                    
                                                    <Link to={"/bidwork/" + mywork._id}> <button className="work-button">Bid Now </button></Link>
                                                    </div>
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
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
}
export default Workerhome