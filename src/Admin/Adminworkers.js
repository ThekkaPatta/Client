import { Component } from "react";
import axios from 'axios'
import '../assets/css/admin/adminshowprofile.css'
import swal from "sweetalert";


class Adminworkers extends Component {
    state = {
        worker: []
    }

    componentDidMount() {
        axios.get("http://localhost:550/worker/show/")
            .then((response) => {
                console.log(response.data);
                this.setState({
                    worker: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            }

            )
    }

    deleteworkers = (aid) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this profile!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete("http://localhost:550/worker/delete/" + aid)
                        .then((response) => {
                        })
                        .catch((err) => {
                            console.log(err.response)
                        })
                    window.location.reload();
                }
            });
    }


    render() {
        return (
            <div className="alignment">
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col">Fullname</th>
                            <th scope="col" >Address</th>
                            <th scope="col" >Phone No.</th>
                            <th scope="col" >Skills</th>
                            <th scope="col" >Username</th>
                            <th scope="col" >Profile Image</th>
                            <th scope="col" >Action</th>

                        </tr>
                    </thead>
                    {
                        this.state.worker.map((workers) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{workers.WFullName}</td>
                                        <td>{workers.WAddress}</td>
                                        <td>{workers.WPhoneNo}</td>
                                        <td>{workers.WSkills}</td>
                                        <td>{workers.WUsername}</td>
                                        <td><img class="img-circle" style={{ height: "20px", width: "20px" }} src={"http://localhost:550/" + workers.ProfileImg}></img></td>
                                        <td>
                                            <a className="btn btn-outline-info p-3" href={"/userprofile/"}> View Profile</a>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={this.deleteworkers.bind(this, workers._id)}>Delete</button>

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
export default Adminworkers