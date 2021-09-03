import { Component } from "react";
import axios from 'axios'
import '../../assets/css/Workhistory.css'
import swal from "sweetalert";


class Workhistory extends Component {
    state = {
        Worker: "",
        works: [],
        Bidprice: "",
        Worktime: "",
    }

    getWorker = () => {
        var u_id = localStorage.getItem('_id');
        axios.get("http://localhost:550/worker/single/" + u_id)
            .then((response) => {
                this.setState({
                    Worker: response.data.WUsername,
                })
            })

            .then(() => {
                axios.get("http://localhost:550/workhistory/" + this.state.Worker)
                    .then((response) => {
                        this.setState({
                            works: response.data.data,

                        })
                    })
                    .catch((err) => {
                        console.log(err.response)
                    })
            })
            .then(() => {
                axios.get("http://localhost:550/worker/bidder/" + this.state.Worker)
                    .then((res) => {
                        this.setState({
                            Bidprice: res.data.Bidprice,
                            Worktime: res.data.Worktime

                        })
                        console.log(res.data.Bidprice)
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
        this.getWorker()
    }


    render() {
        return (
            <div className="alignment">
                <h4 className="bg-light p-4" id="projectAnchor">My History</h4>
                <div>
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col" width="50px">Work Poster</th>
                                <th scope="col" width="50px">Tags</th>
                                <th scope="col" width="90px">Work Tile</th>
                                <th scope="col" width="90px">Work Description</th>
                                <th scope="col" width="50px">Status</th>
                                <th scope="col" width="50px">Bid Price</th>
                                <th scope="col" width="50px">Work Time</th>

                            </tr>
                        </thead>
                        {
                            this.state.works.map((worksdone) => {
                                return (

                                    <tbody>
                                        <tr>
                                            <td>{worksdone.Username}</td>
                                            <td>{worksdone.Tags}</td>
                                            <td>{worksdone.WorkTitle}</td>
                                            <td>{worksdone.Workdescription}</td>
                                            <td>{worksdone.status}</td>
                                            <td>{this.state.Bidprice}</td>
                                            <td>{this.state.Worktime}</td>
                                        </tr>
                                    </tbody>

                                )
                            })
                        }
                    </table>
                </div>
            </div>

        )
    }
}
export default Workhistory