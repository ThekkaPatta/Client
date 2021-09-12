import React, { Component } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure();

class WorkerEditProfile extends Component {
    state = {
        WFullName: "",
        WAddress: "",
        WPhoneNo: "",
        WSkills: "",
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
            WFullName: this.state.WFullName,
            WAddress: this.state.WAddress,
            WPhoneNo: this.state.WPhoneNo,
            WSkills: this.state.WSkills,
            WUsername: this.state.WUsername
        }

        axios
            .post("http://localhost:550/worker/update/" + this.state._id, data)
            .then((response) => {
                console.log(response);
                toast.success("Profile has been edited", { autoClose: 1500 });
                setTimeout(() => {
                    this.props.history.push("/workersprofile")
                }, 1500);
            })
            .catch((err) => {
                toast.error("Failed to Update", { autoClose: 2000 })
            });
    };


    componentDidMount() {
        this.setState({ _id: localStorage.getItem("_id") }, () => {
            axios
                .get("http://localhost:550/worker/single/" + this.state._id)
                .then((response) => {
                    console.log(response);
                    this.setState({
                        WFullName: response.data.WFullName,
                        WAddress: response.data.WAddress,
                        WPhoneNo: response.data.WPhoneNo,
                        WSkills: response.data.WSkills,
                        WUsername: response.data.WUsername,
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
                        <input type="text" class="straight" value={this.state.WFullName}
                            onChange={(event) => { this.setState({ WFullName: event.target.value }) }} />

                    </div>

                    <div className="form-group">
                        <label class="form-label">Address:</label>
                        <input type="text" class="straight" value={this.state.WAddress}
                           onChange={(event) => { this.setState({ WAddress: event.target.value }) }} />
                    </div>

                    <div className="form-group">
                        <label class="form-label">Phone Number:</label>
                        <input type="text" class="straight" value={this.state.WPhoneNo}
                            onChange={(event) => { this.setState({ WPhoneNo: event.target.value }) }} />
                    </div>

                    <div className="form-group">
                        <label class="form-label">Skills:</label>
                        <input type="text" class="straight" value={this.state.WSkills}
                            onChange={(event) => { this.setState({ WSkills: event.target.value }) }} />
                    </div>

                    <div className="form-group">
                        <label class="form-label">Username:</label>
                        <input type="text" class="straight" value={this.state.WUsername}
                            onChange={(event) => { this.setState({ WUsername: event.target.value }) }} />
                    </div>
                    <button
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

export default WorkerEditProfile;