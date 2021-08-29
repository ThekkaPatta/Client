import { Component } from "react";
import '../assets/css/register.css';
import axios from 'axios';

class Registeruser extends Component {
    state = {
        Uimage: "",
        UFullName: "",
        UAddress: "",
        UPhoneNo: "",
        UUsername: "",
        UPassword: ""
    }
    sendUserData = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('Uimage', this.state.Uimage)
        data.append('UFullName', this.state.UFullName)
        data.append('UAddress', this.state.UAddress)
        data.append('UPhoneNo', this.state.UPhoneNo)
        data.append('UUsername', this.state.UUsername)
        data.append('UPassword', this.state.UPassword)

        axios.post("http://localhost:550/user/insert", data)
            .then((response)=>{
                window.location.href = "/loginuser"
                alert('Welcome ! You Are Registered As A User')
               
            })
            .catch(err => {
                console.log(err)
                alert("!! Field Must Not Be Empty !!")
            })
    }
    imageHandler = (e) => {
        this.setState({
            Uimage: e.target.files[0]
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
          <p class="message">Already Have an Account? <a href="/loginuser">Login</a></p>
        </form>
      </div>
    </div>
        )
    }
}
export default Registeruser