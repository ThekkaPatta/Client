import { Component } from "react";
import '../assets/css/register.css';
import axios from 'axios';

class Registerworker extends Component {
    state = {
        Wimage: "",
        WFullName: "",
        WAddress: "",
        WPhoneNo: "",
        WSkills: "",
        WUsername: "",
        WPassword: ""
    }
    sendUserData = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('Wimage', this.state.Wimage)
        data.append('WFullName', this.state.WFullName)
        data.append('WAddress', this.state.WAddress)
        data.append('WPhoneNo', this.state.WPhoneNo)
        data.append('WSkills', this.state.WSkills)
        data.append('WUsername', this.state.WUsername)
        data.append('WPassword', this.state.WPassword)

        axios.post("http://localhost:550/worker/insert", data)
            .then((response)=>{

                window.location.href = "/loginworker";
                alert('Your Account is verifying !!')
            })
            .catch(err => {
                console.log(err)
            })
    }
    imageHandler = (e) => {
        this.setState({
            Wimage: e.target.files[0]
        })
    };
    render() {
        return (
            <div class="login-page">
      <div class="form1">
        <div class="login">
          <div class="login-header">
            <h3>USER SIGNUP</h3>
            <p>Please enter your credentials to Sign Up.</p>
          </div>
        </div>
        <form class="login-form">
        <div class="col-md-6 form-line">
            <div class="form-group"><input type="text" placeholder="Full Name" value={this.state.UFullName}
             onChange={(event) => { this.setState({ UFullName: event.target.value }) }} /></div>
            <div class="form-group"><input type="text" placeholder="Address" value={this.state.UAddress}
            onChange={(event) => { this.setState({ UAddress: event.target.value }) }} /></div>
            <div class="form-group"><input type="text" placeholder="Phone No." value={this.state.UPhoneNo}
            onChange={(event) => { this.setState({ UPhoneNo: event.target.value }) }} /></div>
            <div class="form-group">
                                        <label for="exampleInputtext">Tags</label><br/>
                                        <h4><select name="tags" id="tags" value={this.state.Tags} 
                                        onChange={(event) => { this.setState({ Tags: event.target.value }) }}>
                                            <option value="Choose">Choose One</option>
                                            <option value="plumber">Plumber</option>
                                            <option value="mechanic">Mechanic</option>
                                            <option value="Construction">Construction</option>
                                        </select>
                                        </h4>
                                    </div>
            </div>
            <div class="col-md-6">
             <div class="form-group"><input type="text" placeholder="Username" value={this.state.UUsername}
            onChange={(event) => { this.setState({ UUsername: event.target.value }) }} /></div>
            <div class="form-group"><input type="Password" placeholder="Password" value={this.state.UPassword}
            onChange={(event) => { this.setState({ UPassword: event.target.value }) }} /></div>
            <div class="form-group"><p><input type="file" placeholder="Upload photo" name="Uimage"
            onChange={this.imageHandler} /></p></div>
            </div>
          <button type="submit" onClick={this.sendUserData}>Sign Up</button>
          <p class="message">Already Have an Account? <a href="/login user">Login</a></p>
        </form>
      </div>
    </div>
        )
    }
}
export default Registerworker
