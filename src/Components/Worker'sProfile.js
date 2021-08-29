import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../assets/css/viewprofile.css'

class WorkersProfile extends Component {
       state = {
        WFullName: "",
       WAddress: "",
        WPhoneNo: "",
        WSkills:"",
        Wimage: [],
        _id: "",
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
                        Wimage: response.data.Wimage,
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
                <br></br><br></br><br></br><br></br>
                <div class="contact_form_container">
                <h3 className="bg-light p-4" id="projectAnchor"> !! Your Profile !!</h3>
                <img src={`http://localhost:550/${this.state.Wimage}`}
                     className="img-fluid rounded-circle hoverable"
                     style={{ height: "300px", width: "300px", objectFit: "cover" }}
                     alt=""/><br/><br/>

                <div className="form-group">
                    <label class="form-label">Full Name: {this.state.WFullName}</label>
                </div>
                                
                <div className="form-group">
                    <label class="form-label">Address: {this.state.WAddress}</label>
                </div>
                                
                <div className="form-group">
                    <label class="form-label">Phone Number: {this.state.WPhoneNo}</label>
                </div>
                
                <div className="form-group">
                    <label class="form-label">Skills: {this.state.WSkills}</label>
                </div>
                               
                <div className="form-group">
                    <label class="form-label">Username: {this.state.WUsername} </label>
                </div>
                              <h1><Link to={"/workeredit/"}> Edit Profile </Link></h1>
                            </div>
                        </div>
                    


        );
    }
}

export default WorkersProfile;