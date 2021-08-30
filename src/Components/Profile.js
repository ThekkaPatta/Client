import { Component } from "react";
import axios from 'axios';
import '../assets/css/viewprofile.css';
import ReactStars from "react-rating-stars-component"

class Profile extends Component {
    state = {
        WUsername: this.props.match.params.WUsername,
        WFullName: "",
        WAddress: "",
        WSkills: "",
        WPhoneNo: "",
        nType:"rate",
        Ratenum:"",
        ProfileImg: [],
        Workers: []

    };

    componentDidMount() {
        axios.get("http://localhost:550/worker/username/" + this.state.WUsername)
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
                alert(this.state.WUsername)
            })

            .catch((err) => {
                console.log(err.response);
            });

    }

    RatePost = (e) => {
        var u_id = localStorage.getItem('_id');
        axios.get("http://localhost:550/user/single/" + u_id)
            .then((response) => {
                this.setState({
                    UUsername: response.data.UUsername,
                })
            })
            .then(() => {
                const data = new FormData()
                data.append('Ratenum', this.state.Ratenum)
                data.append('WUsername', this.state.WUsername)
                data.append('UUsername', this.state.UUsername)
                data.append('nType', this.state.nType)
                
                axios.post("http://localhost:550/post/notification", data)
                    .then((response) => {
                        alert('Done Rating !!')
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch((err) => {
                console.log(err)
                alert("Api not hit")
            })
    }

    FavWorker = (e) => {
        e.preventDefault();
        const data = new FormData() // new line
        var UUsername = localStorage.getItem('username');

        data.append('UUsername', UUsername)
        data.append('WFullName', this.state.WFullName)
        data.append('WAddress', this.state.WAddress)
        data.append('WSkills', this.state.WSkills)
        data.append('WPhoneNo', this.state.WPhoneNo)
        data.append('WUsername', this.state.WUsername)
        data.append('ProfileImg', this.state.ProfileImg)
        
        axios.post("http://localhost:550/favworker/insert", data)
            .then((response) => {
                console.log(response)
                alert("worker Added To Your Favorites")
                window.location.href = '/fav'
            })

            .catch((err) => {
                console.log(err.response)
                alert("!!! Something Went Wrong !!!")
            })

    }


    render() {
        const ratingChanged = (rating) => {
            this.state.Ratenum = rating;
            this.RatePost();
        };
        return (
            <div class="contact_form_section">
                <div class="container">
                    <div class="row p-5">
                        <div class="col p-5">

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
                                            value={this.state.WUsername} />
                                    </label>
                                    <ReactStars size={30} count={5} isHalf={true} onChange={ratingChanged} />
                                </div>

                                <button type="submit"
                                    onClick={this.FavWorker}
                                    className="btn btn-info">Add To Favorites</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Profile