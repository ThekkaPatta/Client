import { Component } from "react";
import '../../assets/css/register.css';
import axios from 'axios';

class Registeruser extends Component {
    state = {
        ProfileImg: "",
        UFullName: "",
        UAddress: "",
        UPhoneNo: "",
        UUsername: "",
        UPassword: ""
    }
    sendUserData = (e) => {
        e.preventDefault();
        const data = new FormData()

        if(this.state.ProfileImg===""){
            data.append('ProfileImg', process.env.PUBLIC_URL + '/no_img.jpg')
        } 
        else{
            data.append('ProfileImg',this.state.ProfileImg)
        }
        data.append('UFullName', this.state.UFullName)
        data.append('UAddress', this.state.UAddress)
        data.append('UPhoneNo', this.state.UPhoneNo)
        data.append('UUsername', this.state.UUsername)
        data.append('UPassword', this.state.UPassword)

        axios.post("http://localhost:550/user/insert", data)
            .then((response)=>{
                window.location.href = "/loginuser"
            
alert("register succesfull")

               
            })
            .catch(err => {
                console.log(err)
            })
    }
    imageHandler = (e) => {
        this.setState({
            ProfileImg: e.target.files[0]
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
        <form class="login-form" id="userregisterfrm">
        <div class="col-md-6 form-line">
            <div class="form-group"><input type="text" id="UFullNames" placeholder="Full Name" value={this.state.UFullName}
             onChange={(event) => { this.setState({ UFullName: event.target.value }) }} /></div>
            <div class="form-group"><input type="text" id="UAddresss" placeholder="Address" value={this.state.UAddress}
            onChange={(event) => { this.setState({ UAddress: event.target.value }) }} /></div>
            <div class="form-group"><input type="text" id="UPhoneNos" placeholder="Phone No." value={this.state.UPhoneNo}
            onChange={(event) => { this.setState({ UPhoneNo: event.target.value }) }} /></div>
            </div>
            <div class="col-md-6">
             <div class="form-group"><input type="text" id="UUsernames" placeholder="Username" autoComplete="off" value={this.state.UUsername}
            onChange={(event) => { this.setState({ UUsername: event.target.value }) }} /></div>
            <div class="form-group"><input type="Password" id="UPasswords" placeholder="Password" autoComplete="off" value={this.state.UPassword}
            onChange={(event) => { this.setState({ UPassword: event.target.value }) }} /></div>
            <div class="form-group"><p><input type="file" placeholder="Upload photo" name="ProfileImg"
            onChange={this.imageHandler} /></p></div>
            </div>
          <button type="submit" id="btnsubmit" onClick={this.sendUserData}>Sign Up</button>
          <p class="message">Already Have an Account? <a href="/loginuser">Login</a></p>
        </form>
      </div>
    </div>
        )
    }
}
export default Registeruser