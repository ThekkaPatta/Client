import { Component } from "react";
import axios from 'axios'
<<<<<<< HEAD
import '../assets/css/Userlanding.css'
=======
>>>>>>> 3ec525b632408204b34e00114f728e0334e09f31
import {Link} from 'react-router-dom';


class Workbidder extends Component{
    state={
        Wid : this.props.match.params._id,
        bidder: []
    }

    componentDidMount(){
        axios.get("http://localhost:550/works/bidder/" + this.state.Wid)        
        .then((response)=>{
            console.log(response);
                 this.setState({
                bidder :response.data.data
            })
        })
        .catch((err)=>{
            console.log(err)
        }

        )
    }

    Checkbidder=(Wid)=>{
        axios.get("http://localhost:550/worker/bidder/" +Wid)
        .then((response)=>{
            console.log(response)
            window.location.href = "/profile";
        })
        .catch((err)=>{
            console.log(err)
        }

        )

    }

    render(){
        return(
            <div>
                <br></br><br></br><br></br><br></br>
                {
                    this.state.bidder.map((mybidder) => {
                        return (
                            <div className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Username</th>
                                        <th scope="col">Bid Price</th>
                                        <th scope="col">Worktime</th>
                                        <th scope="col">Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{mybidder.WUsername}</td>
                                    <td>Rs.{mybidder.Bidprice}</td>
                                    <td>{mybidder.Worktime}</td>
                                    <td><a className="btn btn-outline-info p-3" href={"/workbidder/"}>View Profile</a>
                                                <a className="btn btn-outline-success p-3" href={"/workbidder/"}>  Hire  </a></td>
                                                </tr>
                                </tbody>
                            </div>
                        )
                    })
                }
                </div>

        )
    }
}
export default Workbidder