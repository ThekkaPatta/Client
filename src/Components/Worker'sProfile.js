import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../assets/css/viewprofile.css'
import StarRatings from "react-star-ratings"
import swal from "sweetalert";

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
    deleteprofile = (aid) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this profile!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete("http://localhost:550/worker/delete/" + aid)
            .then((response) => {
                })
            .catch((err) => {
                console.log(err.response)
            })
            
            window.location.href = "/";
            }
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
                <button className="btn btn-info"><Link to={"/workeredit/"}> Edit Profile </Link></button>
                <button className="btn btn-danger" onClick={this.deleteprofile.bind(this, this.state._id)}>Delete</button>
                           
                       
                </div>
                <StarRatings rating={3.5} starDimension="35px" starSpacing="15px" starRatedColor="green" />
            </div>


        );
    }


}

export default WorkersProfile;