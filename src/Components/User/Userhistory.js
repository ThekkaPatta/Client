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
        axios.get("https://thekkapatta.herokuapp.com/user/single/" + u_id)
            .then((response) => {
                this.setState({
                    User: response.data.UUsername,
                })
               
            })
            .then(() => {
                axios.get("https://thekkapatta.herokuapp.com/work/history/" + this.state.User)
                    .then((response) => {
                        this.setState({
                            works: response.data.data,

                        })
                        console.log(response.data.data)
                    })
            })

    }

    componentDidMount() {
        this.getWorker()
    }


    render() {
        return (
            <div className="alignment" >
                <h4 className="bg-light p-4" id="projectAnchor">My History</h4>

                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col" >Worker</th>
                            <th scope="col" >Tags</th>
                            <th scope="col" >Work Tile</th>
                            <th scope="col" >Work Description</th>
                            <th scope="col" >Status</th>

                        </tr>
                    </thead>

                    {
                        this.state.works.map((works) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{works.Worker}</td>
                                        <td>{works.Tags}</td>
                                        <td>{works.WorkTitle}</td>
                                        <td>{works.Workdescription}</td>
                                        <td>{works.status}</td>

                                    </tr>
                                </tbody>

                            )
                        })
                    }
                </table>
            </div >

        )
    }
}
export default Userhistory