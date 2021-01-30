import { Component } from "react";
import axios from 'axios';
import '../assets/css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                this.setState({
                    loginChk: true
                  
                }
               )
               
            })
            .catch((err) => {
                console.log(err.response)
                this.notify()
            })
    }

    notify=()=>{
      toast.error('Error username or password', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
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
        <input type="text" placeholder="username" onChange={(event) => { this.setState({ UUsername: event.target.value }) }}/>
        <input type="password" placeholder="password" onChange={(event) => { this.setState({ UPassword: event.target.value }) }}/>
          <button className="btn" type="submit" onClick={this.sendUserData}>login</button>
          <ToastContainer 
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

          <p class="message">Not registered? <a href="/registeruser">Create an account</a></p>
        </form>
      </div>
    </div>
        )
    }
}
export default Loginuser