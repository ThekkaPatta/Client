import React, { Component } from "react";
import axios from "axios";
import '../assets/css/viewprofile.css'
import Review from "./rating";
// import '../assets/css/workpost.css'

class Workerprofile extends Component {
       state = {
        WFullName: "",
       WAddress: "",
       WSkills:"",
        WPhoneNo: "",
        ProfileImg: [],
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
                        WSkills: response.data.WSkills,
                        WPhoneNo: response.data.WPhoneNo,
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
                    <div class="row p-5">
                        <div class="col-md-6 p-5">
                        <br></br><br></br><br></br>
                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor"> !! {this.state.WFullName}'s Profile !!</h3>
                                <img
                                    src={`http://localhost:550/${this.state.ProfileImg}`}
                                    className="img-fluid rounded-circle hoverable"
                                    style={{ height: "300px", width: "300px", objectFit: "cover" }}
                                    alt=""
                                />
                                <br />
                                
                                <br />            


                                <div className="form-group">
                                    <label class="form-label">Full Name
                                   
                                   
                <input type="text"class="form-control"value={this.state.WFullName}/>
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
                                <Review/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Workerprofile;