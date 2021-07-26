import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../assets/css/viewprofile.css'
// import '../assets/css/workpost.css'

class Userprofile extends Component {
       state = {
        UFullName: "",
       UAddress: "",
        UPhoneNo: "",
        Uimage: [],
        _id: "",
    }; 
  
    componentDidMount() {
        this.setState({ _id: localStorage.getItem("_id") }, () => {
            axios
                .get("https://thekkapatta.herokuapp.com/user/single/" + this.state._id)
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
            <div class="contact_form_section">
                <div class="container">
                    <div class="row p-5">
                        <div class="col-md-6 p-5">

                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor"> !! {this.state.UFullName}'s Profile !!</h3>
                                <img
                                    src={`https://thekkapatta.herokuapp.com/${this.state.Uimage}`}
                                    className="img-fluid rounded-circle hoverable"
                                    style={{ height: "300px", width: "300px", objectFit: "cover" }}
                                    alt=""
                                />
                                <br />
                                
                                <br />

                                           


                                <div className="form-group">
                                    <label class="form-label">Full Name
                                   
                                   
                <input type="text"class="form-control"value={this.state.UFullName}/>
                </label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Address
                                   
                <input
                                            type="text"
                                            class="form-control"
                                            value={this.state.UAddress}
                                           
                                           
                                        />
</label>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Phone Number
                <input
                                            type="text"
                                            class="form-control"
                                            value={this.state.UPhoneNo}
                                            
                                          
                                        />
                                    </label>
                                </div>
                               
                                <div className="form-group">
                                    <label class="form-label">Username
                <input
                                            type="text"
                                            class="form-control"
                                            value={this.state.UUsername}
                                            name="Username"
                                            
                                        />
                                    </label>
                                </div>
                              <h1><Link to={"/useredit/"}> Update </Link></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Userprofile;