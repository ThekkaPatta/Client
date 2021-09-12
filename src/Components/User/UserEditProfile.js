import React, { Component } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../assets/css/viewprofile.css'

toast.configure();
class UserEditProfile extends Component {
    state = {
        UFullName: "",
        UAddress: "",
        UPhoneNo: "",
        ProfileImg: [],
        _id: "",
    };
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    imageHandler = (e) => {
        e.preventDefault();
        let files = e.target.files[0];
        this.setState({ files: files }, () => {
            console.log(this.state.files);
        });
    };

    updateProfile = (e) => {
        e.preventDefault();
        const data = {
            UFullName: this.state.UFullName,
            UAddress: this.state.UAddress,
            UPhoneNo: this.state.UPhoneNo,
            UUsername: this.state.UUsername
        }

        axios
            .post("http://localhost:550/user/update/" + this.state._id, data)
            .then((response) => {
                console.log(response);
                toast.success("Profile has been edited", { autoClose: 1500 });
                setTimeout(() => {
                    this.props.history.push("/ownuserprofile")
                }, 1500);
            })
            .catch((err) => {
                toast.error("Failed to update profile", { autoClose: 2000 })
            });
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

    render() {
        return (
            <div class="contact_form_section">
                <div class="contact_form_container">
                    <h3 className="bg-light p-4" id="projectAnchor"> !! Your Profile !!</h3>

                    <img src={`http://localhost:550/${this.state.ProfileImg}`}
                        className="img-fluid rounded-circle hoverable"
                        style={{ height: "200px", width: "200px", objectFit: "cover" }}
                        alt="" /><br /><br />
                    <div className='form-group'>
                        <input
                            type="file"
                            class="forminp"
                            onChange={this.imageHandler.bind(this)}
                        />
                    </div>

                    <div className="form-group">
                        <label class="form-label">Full Name:</label>
                        <input type="text"class="straight" id="UFullNames" value={this.state.UFullName}
                           onChange={(event) => { this.setState({ UFullName: event.target.value }) }} />

                    </div>

                    <div className="form-group">
                        <label class="form-label">Address:</label>
                        <input type="text" class="straight" id="UAddresss" value={this.state.UAddress}
                           onChange={(event) => { this.setState({ UAddress: event.target.value }) }} />

                    </div>

                    <div className="form-group">
                        <label class="form-label">Phone Number:</label>
                        <input type="text" class="straight" id="UPhoneNos" value={this.state.UPhoneNo}
                           onChange={(event) => { this.setState({ UPhoneNo: event.target.value }) }} />
                    </div>

                    <div className="form-group">
                        <label class="form-label">Username:</label>
                        <input type="text" id="UUsernames" class="straight" value={this.state.UUsername}
                            onChange={(event) => { this.setState({ UUsername: event.target.value }) }} />
                    </div>
                    <button
                    id="btnsubmit"
                        type="submit"
                        onClick={this.updateProfile}
                        class="btn btn-info btn-block mb-4"
                    >
                        Update Profile
                    </button>

                </div>
            </div>




        );
    }
}

export default UserEditProfile;