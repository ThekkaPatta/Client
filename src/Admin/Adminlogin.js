import { Component } from "react";
import axios from 'axios';
import '../assets/css/Login.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Adminlogin extends Component {
    state = {
        Username: "",
        Password: ""

    }
    sendUserData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:550/admin/login", this.state)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('_id', response.data._id)
                localStorage.setItem('userType', 'admin')

                toast.success("Admin Login Successful", { autoClose: 2000 });
                window.setTimeout(() => {
                    window.location.href = '/adminpost';
                }, 2000);

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