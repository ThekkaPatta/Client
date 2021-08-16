import { Component } from "react";
import axios from 'axios'
import '../assets/css/Userlanding.css'



class Favorites extends Component {
    state = {
        workers: [],
        Username: "",
    }

    getworker = () => {
        var u_id = localStorage.getItem('_id');
        axios.get("http://localhost:550/user/single/" + u_id)
            .then((response) => {
                this.setState({
                    Username: response.data.UUsername,

                })

            })
            .then(() => {
                axios.get("http://localhost:550/fav/worker/" + this.state.Username)
                    .then((response) => {
                        alert("working on")
                        this.setState({
                            workers: response.data.data,

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
    componentDidMount() {
        this.getworker()
    }

    render() {

        return (
            <div className="container-fluid ">

                <h4 className="bg-light p-4" id="projectAnchor">My Favorites</h4>
                <div className="card-deck p-2">
                    <br></br><br></br><br></br><br></br>
                    {
                        this.state.workers.map((myworkers) => {
                            return (
                                <div className="col-md-4 p-3">
                                    <div className="card">
                                       
 <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"http://localhost:550/" + myworkers.Wimage} />
                                        <h4 className="card-title p-2">Skills: {myworkers.WSkills}</h4>
                                        <h4 className="card-title p-2">Address: {myworkers.WAddress}</h4>
                                        <h4 className="card-title p-2">Phone Number: {myworkers.WPhoneNo}</h4>
                                        <h4 className="card-title p-2">Full Name: {myworkers.WFullName}</h4>
                                        <div className="text-center p-0">
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
export default Favorites
