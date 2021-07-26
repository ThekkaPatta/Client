import { Component } from "react";
import '../assets/css/register.css';
import axios from 'axios';

class Registerworker extends Component {
    state = {
        Wimage: "",
        WFullName: "",
        WAddress: "",
        WPhoneNo: "",
        WSkills: "",
        WUsername: "",
        WPassword: ""
    }
    sendUserData = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('Wimage', this.state.Wimage)
        data.append('WFullName', this.state.WFullName)
        data.append('WAddress', this.state.WAddress)
        data.append('WPhoneNo', this.state.WPhoneNo)
        data.append('WSkills', this.state.WSkills)
        data.append('WUsername', this.state.WUsername)
        data.append('WPassword', this.state.WPassword)

        axios.post("http://localhost:550/worker/insert", data)
            .then((response)=>{
                window.location.href = "/loginworker";
                alert('welcome ! You are Registered As Worker')
            })
            .catch(err => {
                console.log(err)
            })
    }
    imageHandler = (e) => {
        this.setState({
            Wimage: e.target.files[0]
        })
    };
    render() {
        return (
            <section id="contact">
                <div class="main-w3layouts wrapper">
                    <h1> Register As A Worker</h1>
                    <div class="main-agileinfo">
                        <div class="agileits-top">
                            <form>
                                <p>Full Name:<input type="text" value={this.state.WFullName}
                                    onChange={(event) => { this.setState({ WFullName: event.target.value }) }} /></p>
                                <p>Address:<input type="text" value={this.state.WAddress}
                                    onChange={(event) => { this.setState({ WAddress: event.target.value }) }} /></p>
                                <p> Phone Number:<input type="text" value={this.state.WPhoneNo}
                                    onChange={(event) => { this.setState({ WPhoneNo: event.target.value }) }} /></p>
                                <p> Skills:<input type="text" value={this.state.WSkills}
                                    onChange={(event) => { this.setState({ WSkills: event.target.value }) }} /></p>
                                <p>Username:<input type="text" value={this.state.WUsername}
                                    onChange={(event) => { this.setState({ WUsername: event.target.value }) }} /></p>
                                <p>Password:<input type="Password" value={this.state.WPassword}
                                    onChange={(event) => { this.setState({ WPassword: event.target.value }) }} /></p>
                                <p>Upload Photo:<input type="file" placeholder="Upload photo" name="Wimage"
                                    onChange={this.imageHandler} /></p>
                                <p><input type="submit" onClick={this.sendUserData} />  </p>

                            </form>
                            <p>Already have an account? <a href="/loginworker"> Login </a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Registerworker