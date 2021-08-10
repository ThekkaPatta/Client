import { Component } from "react";
import axios from 'axios';
import '../assets/css/viewprofile.css';
import Review from "./rating";


class Profile extends Component {
    state = {
        WUsername: this.props.match.params.WUsername,
        WFullName: "",
        WAddress: "",
        WSkills: "",
        WPhoneNo: "",
        Wimage: []

    };
    componentDidMount() {
        alert(this.state.WUsername)
        axios.get("http://localhost:550/worker/username/" + this.state.WUsername)
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

    }
    FavWorker=(e)=>{
        e.preventDefault();
        const data = new FormData() // new line
        data.append('WFullName', this.state.WFullName)
        data.append('WUsername', this.state.WUsername)
        data.append('WPhoneNo', this.state.WPhoneNo)
        data.append('WSkills', this.state.WSkills)
        data.append('Wimage',this.state.Wimage)
    
        axios.post("http://localhost:550/Favworker/insert",data)
    .then((response)=>{
        console.log(response)
        alert("Worker Added To favorites Successfully ")
        window.location.href='/profile';
    })
    .catch((err)=>{
        console.log(err.response)
      alert("!!! Something Went Wrong !!!")
})

    }

    render() {
        return (
            <div class="contact_form_section">
                <div class="container">
                    <div class="row p-5">
                        <div class="col p-5">
                        <br></br><br></br><br></br>
                            <div class="contact_form_container">

                                <h3 className="bg-light p-4" id="projectAnchor"> !! {this.state.WFullName}'s Profile !!</h3>
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
                                <Review />
                                <button type="submit"
                                    onClick={this.FavWorker}
                                    class="btn btn-block mb-4">Add To Favorites</button>
                            </div>
                            )
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Profile