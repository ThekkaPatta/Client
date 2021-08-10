import { Component } from "react";
import axios from 'axios'
import '../assets/css/Userlanding.css'

class userhome extends Component {
    state = {
        works: [],
        Username:"",
    }

    getUser = () => {
        var u_id = localStorage.getItem('_id');
        axios.get("http://localhost:550/user/single/" + u_id)
            .then((response) => {
                this.setState({
                    Username: response.data.UUsername,
                    
                })
                
            })
            .then(() => {
                axios.get("http://localhost:550/works/posted/" + this.state.Username)
                    .then((response) => {
                        this.setState({
                            works: response.data.data,

                        })
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    Checkbidder=(Wid)=>{
        axios.get("http://localhost:550/works/bidder/" +Wid)
        .then((response)=>{
            console.log(response)
            window.location.href = "/workbidder";
        })
        .catch((err)=>{
            console.log(err)
        }

        )

    }
    componentDidMount() {
        this.getUser()
    }

    render() {

        return (
            <div className="container-fluid ">

                <h4 className="bg-light p-4" id="projectAnchor">All Bookings</h4>
                <div className="card-deck p-2">
                <br></br><br></br><br></br><br></br>
                {
                    this.state.works.map((myworks) => {
                        return (
                            <div className="col-md-4 p-3">
                                <div className="card">
                                <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"http://localhost:550/" + myworks.Wimage} />
                                            <h4 className="card-title p-2">Tag: {myworks.Tags}</h4>
                                            <h4 className="card-title p-2">Work Description: {myworks.Workdescription}</h4>
                                            <div className="text-center p-0">
                                                {}
                                                <p> 
                                                <a className="btn btn-outline-info p-3" href={"/workbidder/"+myworks._id}>View Bidders</a>
                                                </p>
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
}
export default userhome
