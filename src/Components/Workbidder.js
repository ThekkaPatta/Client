import { Component, React } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import '../assets/css/adminshowprofile.css'
class Workbidder extends Component {
    state = {
        Wid: this.props.match.params._id,
        bidder: [],
        UUsername: '',
        WUsername: '',   
        nType: 'Hire',
        status: '',
    }
    componentDidMount() {
        axios.get("http://localhost:550/works/bidder/" + this.state.Wid)
            .then((response) => {
                console.log(response)
                this.setState({
                    bidder: response.data.data,

                })
            })
            .then(() => {
                axios.get("http://localhost:550/work/single/" + this.state.Wid)
                    .then((response) => {
                        this.setState({
                            status: response.data.status
                        })
                        alert(this.state.status)
                    })
            })

            .catch((err) => {
                console.log(err)
            })
    }


    hire = (WUsername) => {
        const data = new FormData()
        data.append('WUsername', WUsername)
        data.append('Wid', this.state.Wid)

        alert(WUsername)

        axios.post("http://localhost:550/hire/worker", data)
            .then((response) => {
                alert("Worker has been hired")
            })
            .then(() => {
                var u_id = localStorage.getItem('_id');
                axios.get("http://localhost:550/user/single/" + u_id)
                    .then((response) => {
                        this.setState({
                            UUsername: response.data.UUsername,
                        })
                    })
                    .then(() => {
                        const data = new FormData()
                        data.append('Workid', this.state.Wid)
                        data.append('WUsername', WUsername)
                        data.append('UUsername', this.state.UUsername)
                        data.append('nType', this.state.nType)

                        axios.post("http://localhost:550/post/notification", data)
                            .then((response) => {
                                window.location.href= "/userhistory/"+this.state.Wid;
                            })

                    })

            })


            .catch((err) => {
                console.log(err)
                alert("Api not hit")
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

                                        <td><a className="btn btn-outline-info p-3" ><Link to={"/profile/" + mybidder.WUsername}>View Profile</Link></a></td>
                                        <td>
                                            {(() => {
                                                if (this.state.status === "Pending") {
                                                    return (
                                                        <button className="btn btn-outline-success p-3" onClick={this.hire.bind(this, mybidder.WUsername)}>
                                                            <Link to={"/userhistory"}>Hire</Link></button>
                                                    )
                                                }
                                                else {

                                                }
                                            })()}
                                        </td>

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