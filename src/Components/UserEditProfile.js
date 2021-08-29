import React, { Component } from "react";
import axios from "axios";
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
            UFullName:this.state.UFullName,
            UAddress:this.state.UAddress,
            UPhoneNo:this.state.UPhoneNo,
            UUsername:this.state.UUsername
        }
        
        axios
            .post("http://localhost:550/user/update/" + this.state._id, data)
            .then((response) => {
                console.log(response);
                window.location.replace("/userprofile");
                alert("Updated ")
            })
            .catch((err) => {
                console.log(err.response);
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
                <div class="container">
                    <div class="row">
                        <div class="col">

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor">!!Your Profile !!</h3>
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
                                            value={this.state.UFullName}
                                            name="UFullName"
                                            onChange={this.changeHandler}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Address
                <input
                                            type="text"
                                            class="form-control text-center"
                                            value={this.state.UAddress}
                                            name="UAddress"
                                            onChange={this.changeHandler}
                                        />

                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Phone Number
                <input
                                            type="text"
                                            class="form-control text-center"
                                            value={this.state.UPhoneNo}
                                            name="UPhoneNo"
                                            onChange={this.changeHandler}
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Username
                <input
                                            type="text"
                                            class="form-control text-center"
                                            value={this.state.UUsername}
                                            name="UUsername"
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

export default UserEditProfile;