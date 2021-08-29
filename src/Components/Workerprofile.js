import React, { Component } from "react";
import axios from "axios";
import '../assets/css/viewprofile.css'
import Review from "./rating";

class Workerprofile extends Component {
       state = {
        WFullName: "",
       WAddress: "",
       WSkills:"",
        WPhoneNo: "",
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
                        WSkills: response.data.WSkills,
                        WPhoneNo: response.data.WPhoneNo,
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
                <br></br><br></br><br></br>
                <div class="contact_form_container">
                <br></br><br></br><br></br><br></br><br></br>
                <h3 className="bg-light p-4" id="projectAnchor"> !! {this.state.WFullName}'s Profile !!</h3>
                <img src={`http://localhost:550/${this.state.Wimage}`}
                    className="img-fluid rounded-circle hoverable"
                    style={{ height: "300px", width: "300px", objectFit: "cover" }}
                    alt=""/><br/><br />            

                <div className="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="straight"value={this.state.WFullName}/>
                </div>

                <div className="form-group">
                    <label class="form-label">Address</label>
                    <input type="text" class="straight" value={this.state.WAddress} />
                </div>
                                
                <div className="form-group">
                    <label class="form-label">Phone Number</label>
                    <input type="text" class="straight" value={this.state.WPhoneNo}/>
                </div>

                <div className="form-group">
                    <label class="form-label">Skills</label>
                    <input type="text" class="straight" value={this.state.WSkills}/>
                </div>

                <div className="form-group">
                    <label class="form-label">Username</label>
                    <input type="text" class="straight" value={this.state.WUsername} name="Username" />
                </div>
                <Review/>
            </div>
        </div>
                    


        );
    }
}

export default Workerprofile;