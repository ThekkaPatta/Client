import { Component } from "react";
import axios from 'axios'
import '../assets/css/Userlanding.css'
import {Link} from 'react-router-dom';

class Userlandingpage extends Component {
    state = {
        works: [],
        Username:""
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
                            works: response.data.data
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
            <div class="userfpage">
                {
                    this.state.works.map((myworks) => {
                        return (
                            <div>
                                <Link to={"/workbidder/"+myworks._id}>
                                <p>{myworks.Workdescription}</p>
                                <img class="card-img-top" style={{ height: "10px", width: "10px" }} src={"http://localhost:550/" + myworks.Wimage} />
                                </Link>
                            </div>


                        )

                    })
                    
                }
             
            </div>
        )
    }

}
export default Userlandingpage