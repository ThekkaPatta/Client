import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../assets/css/viewprofile.css'
import StarRatings from "react-star-ratings"

class WorkersProfile extends Component {
    state = {
        WFullName: "",
        WAddress: "",
        WPhoneNo: "",
        WSkills: "",
        Wimage: [],

    };
    componentDidMount() {
        var W_id = localStorage.getItem('_id');
        axios.get("http://localhost:550/worker/single/" + W_id)
            .then((response) => {
                console.log(response);
                this.setState({
                    WFullName: response.data.WFullName,
                    WAddress: response.data.WAddress,
                    WPhoneNo: response.data.WPhoneNo,
                    WSkills: response.data.WSkills,
                    WUsername: response.data.WUsername,
                    Wimage: response.data.Wimage,
                })

            }).then(() => {
                axios.get("http://localhost:550/notifications/worker/" + this.state.WUsername)
                    .then((response) => {
                        this.setState({
                            rates: response.data.Ratenum
                        })
                        console.log(response.data.Ratenum)
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch((err) => {
                console.log(err.response);
            })

    }

    render() {
        return (
            <div class="contact_form_section" >
                <div class="container">
                    <div class="row p-5">
                        <div class="col p-5">
                            <br></br><br></br>

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor"> !! Your Profile !!</h3>
                                <img
                                    src={`http://localhost:550/${this.state.Wimage}`}
                                    className="img-fluid rounded-circle hoverable"
                                    style={{ height: "300px", width: "300px", objectFit: "cover" }}
                                    alt=""
                                />
                                <br />

                                <br />




                                <div className="form-group">
                                    <label class="form-label">Full Name


                                        <input type="text" class="form-control" value={this.state.WFullName} />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Address

                                        <input
                                            type="text"
                                            class="form-control"
                                            value={this.state.WAddress}


                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Phone Number
                                        <input
                                            type="text"
                                            class="form-control"
                                            value={this.state.WPhoneNo}


                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Skills
                                        <input
                                            type="text"
                                            class="form-control"
                                            value={this.state.WSkills}


                                        />
                                    </label>
                                </div>

                                <div className="form-group">
                                    <label class="form-label">Username
                                        <input
                                            type="text"
                                            class="form-control"
                                            value={this.state.WUsername}
                                            name="Username"

                                        />
                                    </label>
                                </div>
                                <button className="btn btn-info"> <Link to={"/workeredit/"}> Edit Profile </Link></button>
                            </div>
                        </div>
                        <StarRatings rating={3.5} starDimension="35px" starSpacing="15px" starRatedColor="green" />
                    </div>
                </div>
            </div>


        );
    }


}

export default WorkersProfile;