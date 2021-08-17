import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../assets/css/viewprofile.css'
import swal from "sweetalert";
import { Button } from "bootstrap";

class Ownuserprofile extends Component {
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
                axios.delete("http://localhost:550/user/delete/" + aid)
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
                <div class="container">
                    <div class="row p-5">
                        <div class="col p-5">
                        <br></br><br></br><br></br>
                            <div class="contact_form_container">
                                <br></br><br></br><br></br><br></br><br></br>

                                <h3 className="bg-light p-4" id="projectAnchor"> !! Your Profile !!</h3>
                                <img
                                    src={`http://localhost:550/${this.state.Uimage}`}
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
                              <button className="btn btn-info"><Link to={"/useredit/"}> Edit Profile </Link></button>
                              <button className="btn btn-warning" onClick={this.deleteprofile.bind(this, this.state._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Ownuserprofile;