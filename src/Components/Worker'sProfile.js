import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../assets/css/viewprofile.css'
import StarRatings from "react-star-ratings"

class WorkersProfile extends Component {
    state = {
        WUsername:'',
        WFullName: "",
        WAddress: "",
        WPhoneNo: "",
        WSkills:"",
        ProfileImg: [],
        _id: "",
    }; 
  
    componentDidMount() {
        this.setState({ _id: localStorage.getItem("_id") }, () => {
            axios.get("http://localhost:550/worker/single/" + this.state._id)
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
            <div class="contact_form_section">
                <br></br><br></br><br></br><br></br>
                <div class="contact_form_container">
                <h3 className="bg-light p-4" id="projectAnchor"> !! Your Profile !!</h3>
                <img src={`http://localhost:550/${this.state.ProfileImg}`}
                     className="img-fluid rounded-circle hoverable"
                     style={{ height: "300px", width: "300px", objectFit: "cover" }}
                     alt=""/><br/><br/>

                <div className="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="straight" value={this.state.WFullName}/>
                </div>
                                
                <div className="form-group">
                    <label class="form-label">Address</label>
                    <input type="text" class="straight" value={this.state.WAddress}/>
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
                    <input type="text" class="straight" value={this.state.WUsername}/>   
                </div>
                              <h1><Link to={"/workeredit/"}> Edit Profile </Link></h1>
                           
                        <StarRatings rating={3.5} starDimension="35px" starSpacing="15px" starRatedColor="green" />
                </div>
            </div>


        );
    }


}

export default WorkersProfile;