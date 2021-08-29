import React, { Component } from "react";
import axios from "axios";
import '../assets/css/edituser.css'
class UserEditProfile extends Component {
    state = {
        UFullName: "",
        UAddress: "",
        UPhoneNo: "",
        Uimage: [],
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
                        Uimage: response.data.Uimage,
                    });
                })
                .catch((err) => {
                    console.log(err.response);
                });
        });
    }

    render() {
        return (
            <div class="Editfor">
            <center>
            <div class="box">
                                            <img
                                                src={`http://localhost:550/${this.state.Uimage}`}
                                                className="imageho "
                                                alt="this is a profile picture"
                                            />
                                      
                                                <input
                                                    type="file"
                                                    class="form-control"
                                                    onChange={this.imageHandler.bind(this)}
                                                />

                                          
                                


                                           
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    value={this.state.UFullName}
                                                    name="UFullName"
                                                    onChange={this.changeHandler}
                                                    placeholder="Full Name"
                                                />

                                          
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    value={this.state.UAddress}
                                                    name="UAddress"
                                                    onChange={this.changeHandler}
                                                    placeholder="Address"
                                                />


                                           
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    value={this.state.UPhoneNo}
                                                    name="UPhoneNo"
                                                    onChange={this.changeHandler}
                                                    placeholder="Phone no."
                                                />

                                            
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    value={this.state.UUsername}
                                                    name="UUsername"
                                                    onChange={this.changeHandler}
                                                    placeholder="Username"
                                                />

                                        

                                            <button
                                                type="submit"
                                                onClick={this.updateProfile}
                                                className="Updatho"
                                            >
                                                Update Profile
                                            </button>
                         
                    

</div>
</center>
</div>
        );
    }
}

export default UserEditProfile;