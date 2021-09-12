import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../assets/css/viewprofile.css';
import swal from "sweetalert";

class Ownuserprofile extends Component {
    state = {
        UFullName: "",
        UAddress: "",
        UPhoneNo: "",
        ProfileImg: [],
        _id: "",
    };

    componentDidMount() {
        this.setState({ _id: localStorage.getItem("_id") }, () => {
            axios
                .get("http://localhost:550/user/single/" + this.state._id)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        UFullName: response.data.UFullName,
                        UAddress: response.data.UAddress,
                        UPhoneNo: response.data.UPhoneNo,
                        UUsername: response.data.UUsername,
                        ProfileImg: response.data.ProfileImg,
                    });
                })
                .catch((err) => {
                    console.log(err.response);
                });
        });
    }

    deleteprofile = (aid) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this profile!",
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

                    window.location.href = "/";
                }
            });
    }

    render() {
        return (
            <div class="contact_form_section">
                <div class="contact_form_container">
                    <h3 className="bg-light p-4" id="projectAnchor"> !! Your Profile !!</h3>
                    
                    <img src={`http://localhost:550/${this.state.ProfileImg}`}
                        className="img-fluid rounded-circle hoverable"
                        style={{ height: "200px", width: "200px", objectFit: "cover" }}
                        alt="" /><br /><br />

                    <div className="form-group">
                        <label class="form-label">Full Name:</label>
                        <input type="text" class="straight" value={this.state.UFullName} />

                    </div>

                    <div className="form-group">
                        <label class="form-label">Address:</label>
                        <input type="text" class="straight" value={this.state.UAddress} />

                    </div>

                    <div className="form-group">
                        <label class="form-label">Phone Number:</label>
                        <input type="text" class="straight" value={this.state.UPhoneNo} />
                    </div>

                    <div className="form-group">
                        <label class="form-label">Username:</label>
                        <input type="text" class="straight" value={this.state.UUsername} />
                    </div>

                    <button id="edtbn" className="btn btn-info"><Link to={"/useredit/"}> Edit Profile </Link></button>
                    <button className="btn btn-danger" onClick={this.deleteprofile.bind(this, this.state._id)}>Delete</button>
                </div>
            </div>



        );
    }
}

export default Ownuserprofile;