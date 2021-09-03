import React, { Component } from "react";
import axios from "axios";

class WorkerEditProfile extends Component {
       state = {
        WFullName: "",
        WAddress: "",
        WPhoneNo: "",
        WSkills:"",
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
            WFullName:this.state.WFullName,
            WAddress:this.state.WAddress,
            WPhoneNo:this.state.WPhoneNo,
            WSkills:this.state.WSkills,
            WUsername:this.state.WUsername
        }
        
        axios
            .post("http://localhost:550/worker/update/" + this.state._id, data)
            .then((response) => {
                console.log(response);
                window.location.replace("/workersprofile");
                alert("Updated ")
            })
            .catch((err) => {
                console.log(err.response);
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
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor">!!Edit Your Profile !!</h3>
                                <img
                                    src={`http://localhost:550/${this.state.ProfileImg}`}
                                    className="img-fluid rounded-circle hoverable"
                                    style={{ height: "200px", width: "200px", objectFit: "cover" }}
                                    alt=""
                                />
                                <br />
                                <input
                                    type="file"
                                    class="form-control"
                                    onChange={this.imageHandler.bind(this)}
                                />

                                <br />
                                <div className="form-group">
                                    <label class="form-label">Full Name
                <input
                                            type="text"
                                            class="form-control text-center"
                                            value={this.state.WFullName}
                                            name="WFullName"
                                            onChange={this.changeHandler}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Address
                <input
                                            type="text"
                                            class="form-control text-center"
                                            value={this.state.WAddress}
                                            name="WAddress"
                                            onChange={this.changeHandler}
                                        />

                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Phone Number
                <input
                                            type="text"
                                            class="form-control text-center"
                                            value={this.state.WPhoneNo}
                                            name="WPhoneNo"
                                            onChange={this.changeHandler}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Skills
                <input
                                            type="text"
                                            class="form-control text-center"
                                            value={this.state.WSkills}
                                            name="WSkills"
                                            onChange={this.changeHandler}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Username
                <input
                                            type="text"
                                            class="form-control text-center"
                                            value={this.state.WUsername}
                                            name="WUsername"
                                            onChange={this.changeHandler}
                                        />
                                    </label>
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
                    </div>
                </div>
            </div>


        );
    }
}

export default WorkerEditProfile;