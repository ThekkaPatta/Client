import { Component } from "react";
import axios from 'axios';
import '../../assets/css/Login.css';
import { Toast } from "bootstrap";

class Loginuser extends Component {
  state = {
    Username: "",
    Password: ""

  }
  sendUserData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:550/user/login", this.state)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('_id', response.data._id)
        localStorage.setItem('username', response.data.UUsername)
        localStorage.setItem('userType', 'user')
        window.location.href = "/userlanding";
        Toast.success("affafasafafa")
        this.setState({
          loginChk: true
        })

      })
      .catch((err) => {
        console.log(err.response)
        alert("Invalid Credential")
      })
  }

  render() {
    return (
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>USER LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form class="login-form">
            <input type="text" placeholder="username" onChange={(event) => { this.setState({ UUsername: event.target.value }) }} />
            <input type="password" placeholder="password" onChange={(event) => { this.setState({ UPassword: event.target.value }) }} />
            <button type="submit" onClick={this.sendUserData}>login</button>
            <p class="message">Not registered? <a href="/registeruser">Create an account</a></p>
          </form>
        </div>
      </div>
    )
  }
}
export default Loginuser