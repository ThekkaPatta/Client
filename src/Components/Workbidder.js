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
                                window.location.href = "/workbidder/" + this.state.Wid;
                            })

                    })

            })


            .catch((err) => {
                console.log(err)
                alert("Api not hit")
            }

            )

    }

    render() {
        return (
            <div className="alignment">
                <table cellSpacing="100" className="tabble">
                    <thead className="tablehead">
                        <tr>
                            <th className="headerson" >Username</th>
                            <th className="headerson" >Bid Price</th>
                            <th className="headerson" >Worktime</th>
                            <th className="headerson" >Actions</th>

                        </tr>
                    </thead>

                    {
                        this.state.bidder.map((mybidder) => {
                            return (

                                <tbody className="boxdesign" >

                                    <tr className="rows">
                                        <td className="bodyko" col-3>{mybidder.WUsername}</td>
                                        <td className="bodyko" col-3>Rs.{mybidder.Bidprice}</td>
                                        <td className="bodyko" col-3>{mybidder.Worktime}</td>
                                        <td className="buttonsko" col-3><button className="viewpro"><a href={"/userprofile/"}> View Profile</a></button>

                                            {(() => {
                                                if (this.state.status === "Pending") {
                                                    return (
                                                        <button className="viewpro2" onClick={this.hire.bind(this, mybidder.WUsername)}>Hire</button>
                                                    )
                                                }
                                                else {

                                                }
                                            })()}
                                        </td>
                                    </tr>


                                </tbody>
                            )
                        })
                    }
                </table>

            </div>

        )
    }
}
export default Workbidder