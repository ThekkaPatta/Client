import { Component } from "react";
import axios from 'axios';
import '../assets/css/Login.css';

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
                localStorage.setItem('userType', 'user')
                window.location.href = "/workpost";
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
            <div class="lw">
            <div class="wrapper">
                <div class="circle circle1"></div>
                <div class="circle circle2"></div>
                <div class="form">
                    <h1>User Login</h1>
                    <form>
                        <input type="text" placeholder="xyz@mail.com" alue={this.state.UUsername} placeholder="Username"
                            onChange={(event) => { this.setState({ UUsername: event.target.value }) }} />
                        <input type="password" placeholder="password" value={this.state.UPassword} placeholder="Password"
                            onChange={(event) => { this.setState({ UPassword: event.target.value }) }} />
                        <button type="submit" id="login" onClick={this.sendUserData}>Login</button>
                        <div class="forgot-signup">
                            <a href="#">Forgot password?</a>
                            <a href="/registeruser">Sign Up as User</a>

                        </div>
                    </form>
                </div>
            </div>

            <div class="background"></div>
        </div>
        )
    }
}
export default Loginuser