import { Component } from "react";
import axios from 'axios';
import '../assets/css/Login.css'

class Loginworker extends Component {
    state = {
        Username: "",
        Password: "",
    }
    sendUserData2 = (e) => {
        e.preventDefault();
        axios.post("http://localhost:550/worker/login", this.state)
            .then((response) => {
                console.log(response.data.message);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('_id', response.data._id)
                console.log(response)
                localStorage.setItem('userType', 'worker')
                window.location.href = "/workerhome";
                this.setState({
                    loginChk: true
                })
                alert("You Are Logged In !!")
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
            <h3>WORKER LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
                        <input type="text" placeholder="username" onChange={(event) => { this.setState({ WUsername: event.target.value }) }}/>
        <input type="password" placeholder="password" onChange={(event) => { this.setState({ WPassword: event.target.value }) }}/>
          <button type="submit" onClick={this.sendUserData2}>login</button>
          <p class="message">Not registered? <a href="/registerworker">Create an account</a></p>
          </form>
      </div>
    </div>



        )
    }
}
export default Loginworker