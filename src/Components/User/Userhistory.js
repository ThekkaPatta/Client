import { Component } from "react";
import axios from 'axios'
import '../../assets/css/admin/adminshowprofile.css'
import swal from "sweetalert";


class Userhistory extends Component {
    state = {
        User: "",
        works: [],
        Bidprice: [],
        Worktime: [],
    }

    getWorker = () => {
        var u_id = localStorage.getItem('_id');
        axios.get("http://localhost:550/user/single/" + u_id)
            .then((response) => {
                this.setState({
                    User: response.data.UUsername,
                })
            })
            .then(() => {
                axios.get("http://localhost:550/work/history/" + this.state.User)
                    .then((response) => {
                        this.setState({
                            works: response.data.data,

                        })
                    })
            })
            .then(() => {
                axios.get("http://localhost:550/user/bidder/" + this.state.User)
                    .then((res) => {
                        this.setState({
                            Bidprice: res.data.Bidprice,
                            Worktime: res.data.Worktime

                        })
                        alert(this.state.Worktime)
                        console.log(res.data.Bidprice)
                    })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }
    componentDidMount() {
        this.getWorker()
    }


    render() {
        return (
            <div className="alignment" >
                <h4 className="bg-light p-4" id="projectAnchor">My History</h4>
                {
                    this.state.works.map((works) => {
                        return (
                            <div>
                                <table class="table table-stripped">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="50px">Worker</th>
                                            <th scope="col" width="50px">Tags</th>
                                            <th scope="col" width="90px">Work Tile</th>
                                            <th scope="col" width="90px">Work Description</th>
                                            <th scope="col" width="50px">Status</th>
                                            <th scope="col" width="50px">Bid Price</th>
                                            <th scope="col" width="50px">Work Time</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{works.Worker}</td>
                                            <td>{works.Tags}</td>
                                            <td>{works.WorkTitle}</td>
                                            <td>{works.Workdescription}</td>
                                            <td>{works.status}</td>
                                            <td>{this.state.Bidprice}</td>
                                            <td>{this.state.Worktime}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })
                }
            </div >

        )
    }
}
export default Userhistory