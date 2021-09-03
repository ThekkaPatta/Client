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
            <div class="login-page">
                <div class="form">
                    <div class="login">
                        <div class="login-header">
                            <h3>Admin Login</h3>
                            <p>Please enter your credentials to login.</p>
                        </div>
                    </div>
                    <form class="login-form">
                        <input type="text" placeholder="username" onChange={(event) => { this.setState({ Username: event.target.value }) }} />
                        <input type="password" placeholder="password" onChange={(event) => { this.setState({ Password: event.target.value }) }} />
                        <button type="submit" onClick={this.sendUserData}>login</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Adminlogin