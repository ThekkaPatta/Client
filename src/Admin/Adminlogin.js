import { Component } from "react";
import axios from 'axios';
import '../assets/css/Login.css';
import { Alert } from "bootstrap";

class Adminlogin extends Component {
    state = {
        Username: "",
        Password: ""

    }
    sendUserData = (e) => {
        e.preventDefault();
        axios.post("https://thekkapatta.herokuapp.com/admin/login", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('_id', response.data._id)
                localStorage.setItem('userType', 'admin')
                window.location.href = "/adminpost";
                alert("Login success")
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
                    <h1>Admin Login</h1>
                    <form>
                        <input type="text" placeholder="xyz@mail.com" alue={this.state.Username} placeholder="Username"
                            onChange={(event) => { this.setState({ Username: event.target.value }) }} />
                        <input type="password" placeholder="password" value={this.state.Password} placeholder="Password"
                            onChange={(event) => { this.setState({ Password: event.target.value }) }} />
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
export default Adminlogin