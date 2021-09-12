import { Component } from "react";
import axios from 'axios';
import '../../assets/css/Login.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
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
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('_id', response.data._id);
        localStorage.setItem('userType', 'user');
        localStorage.setItem('username', response.data.UUsername);

        toast.success("Login Successful", { autoClose: 2000});
        window.setTimeout(() => {
          window.location.href='/userlanding';
        },2000);

      })

      .catch((err) => {
        console.log(err.response)
        toast.error("Failed to Login", { autoClose: 2000 })
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
          <form class="login-form" id="lgnuserfr">
            <input type="text" id="usrnm" placeholder="username" onChange={(event) => { this.setState({ UUsername: event.target.value }) }} />
            <input type="password" id="psswrd" placeholder="password" onChange={(event) => { this.setState({ UPassword: event.target.value }) }} />
            <button type="submit"id="usrsb" onClick={this.sendUserData}>login</button>
            <p class="message">Not registered? <a href="/registeruser">Create an account</a></p>
          </form>
        </div>
      </div>
    )
  }
}
export default Loginuser