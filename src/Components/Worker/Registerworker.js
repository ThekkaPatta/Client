import { Component } from "react";
import '../../assets/css/register.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Registerworker extends Component {
    state = {
        ProfileImg: "",
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

        // data.append('ProfileImg', this.state.ProfileImg)
        data.append('WFullName', this.state.WFullName)
        data.append('WAddress', this.state.WAddress)
        data.append('WPhoneNo', this.state.WPhoneNo)
        // data.append('WSkills', this.state.WSkills)
        data.append('WUsername', this.state.WUsername)
        data.append('WPassword', this.state.WPassword)

        axios.post("http://localhost:550/worker/insert", data)
            .then((response)=>{

                toast.success("Your Worker Account is being verified", { autoClose: 1500 });
                window.setTimeout(() => {
                    window.location.href = '/loginworker';
                }, 1500);
            })
            .catch(err => {
                toast.error("Failed to create your Worker account", { autoClose: 1500 })
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
            <h3>WORKER SIGNUP</h3>
            <p>Please enter your credentials to Sign Up.</p>
          </div>
        </div>
        <form class="login-form" id="wrkrfrms">
        <div class="col-md-6 form-line">
            <div class="form-group"><input type="text" id="wfname" placeholder="Full Name" value={this.state.WFullName}
             onChange={(event) => { this.setState({ WFullName: event.target.value }) }} /></div>
            <div class="form-group"><input type="text" id="wAddresss" placeholder="Address" value={this.state.WAddress}
            onChange={(event) => { this.setState({ WAddress: event.target.value }) }} /></div>
            <div class="form-group"><input type="text" id="wPhoneNos"placeholder="Phone No." value={this.state.WPhoneNo}
            onChange={(event) => { this.setState({ WPhoneNo: event.target.value }) }} /></div>
            <div class="form-group">
                                        <label for="exampleInputtext">Tags</label><br/>
                                        <h4><select name="tags" id="tags" value={this.state.WSkills} 
                                        onChange={(event) => { this.setState({ WSkills: event.target.value }) }}>
                                            <option value="Choose">Choose One</option>
                                            <option value="plumber" >Plumber</option>
                                            <option value="mechanic">Mechanic</option>
                                            <option value="Construction">Construction</option>
                                        </select>
                                        </h4>
                                    </div>
            </div>
            <div class="col-md-6">
             <div class="form-group"><input type="text" id="wUsernames" placeholder="Username" autoComplete="off" value={this.state.WUsername}
            onChange={(event) => { this.setState({ WUsername: event.target.value }) }} /></div>
            <div class="form-group"><input type="Password" id="wPasswords" placeholder="Password" autoComplete="off" value={this.state.WPassword}
            onChange={(event) => { this.setState({ WPassword: event.target.value }) }} /></div>
            <div class="form-group"><p><input type="file" placeholder="Upload photo" name="ProfileImg"
            onChange={this.imageHandler} /></p></div>
            </div>
          <button type="submit" id="btnsumit" onClick={this.sendUserData}>Sign Up</button>
          <p class="message">Already Have an Account? <a href="/loginworker">Login</a></p>
        </form>
      </div>
    </div>
        )
    }
}
export default Registerworker
