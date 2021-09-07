import { Component } from "react";
import axios from 'axios'
import '../assets/css/admin/adminshowprofile.css'
import swal from "sweetalert";


class Adminusers extends Component {
    state = {
        guser: [],
    }

    componentDidMount() {
        axios.get("http://localhost:550/user/show/")
            .then((response) => {
                this.setState({
                    guser: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    deleteusers = (aid) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Profile!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete("http://localhost:550/user/delete/" + aid)
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
                            <th scope="col">Address</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Username</th>
                            <th scope="col">Image</th>
                            <th scope="col">View Profile</th>
                            <th scope="col">Delete Profile</th>

                        </tr>
                    </thead>
                    {
                        this.state.guser.map((users) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{users.UFullName}</td>
                                        <td>{users.UAddress}</td>
                                        <td>{users.UPhoneNo}</td>
                                        <td>{users.UUsername}</td>
                                        <td><img class="img-circle" style={{ height: "20px", width: "20px" }} src={"http://localhost:550/" + users.ProfileImg}></img></td>
                                        <td>
                                            <a className="btn btn-outline-info p-3" href={"/userprofile/"}> View Profile</a>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={this.deleteusers.bind(this, users._id)}>Delete</button>
                                        </td>
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
export default Adminusers