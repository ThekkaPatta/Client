import { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import '../assets/css/adminshowprofile.css'


class Workbidder extends Component{
    state={
        Wid : this.props.match.params._id,
        Wimage: [],
        Username:"",
        bidder: []
    }

    componentDidMount(){
        axios.get("http://localhost:550/works/bidder/" + this.state.Wid)        
        .then((response)=>{
            console.log(response)
                 this.setState({
                 bidder :response.data.data,
              
            })
        })
        .then(() =>{
            axios.get("http://localhost:550/worker/username/" + this.state.Username)
            .then((response) => {

                console.log(response);
                this.setState({
                    Wimage: response.data.Wimage,
                });
                alert(this.state.Username)
            })
            .catch((err) => {
                console.log(err.response);
            });
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
            <div className="alignment">
                <br></br><br></br><br></br><br></br>
                {
                    this.state.bidder.map((mybidder) => {
                        return (
                            <div>
                                <table class ="table table-stripped">
                                <thead>
                                    <tr>
                                        <th scope="col" width="90px">Username</th>
                                        <th scope="col" width="90px">Bid Price</th>
                                        <th scope="col" width="90px">Worktime</th>
                                        <th scope="col" width="90px">Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{mybidder.WUsername}</td>
                                    <td>Rs.{mybidder.Bidprice}</td>
                                    <td>{mybidder.Worktime}</td>
                                    <td><a className="btn btn-outline-info p-3" ><Link to={"/Profile/" +mybidder.WUsername}>View Profile</Link></a>
                                                <a className="btn btn-outline-success p-3" href={"/workbidder/"}>  Hire  </a></td>
                                                </tr>
                                </tbody>
                                </table>
                            </div>
                        )
                    })
                }
                </div>

        )
    }
}
export default Workbidder