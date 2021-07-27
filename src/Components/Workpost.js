import axios from "axios";
import { Alert } from "bootstrap";
import { Component } from "react";
import '../assets/css/workpost.css'

class Workpost extends Component {
    state={
        FullName:"",
        Username:"",
        PhoneNo:"",
        Tags:"",
        Workdescription:"",
        Wimage:"",
    }

    componentDidMount(){
        var u_id = localStorage.getItem('_id');
        alert(u_id)
        axios.get("https://thekkapatta.herokuapp.com/user/single/" +u_id)
            .then((response)=>{
                console.log(response)
                this.setState({
                    Username : response.data.UUsername,
                    FullName : response.data.UFullName,
                    PhoneNo : response.data.UPhoneNo,
                })
            })
            .catch((err)=>{
                console.log(err.response)
        })
    }

    fileHandler = (e) => {
        this.setState({
            Wimage: e.target.files[0]
        })
    }

    Workpost=(e)=>{
        e.preventDefault();
        const data = new FormData() // new line
        data.append('FullName', this.state.FullName)
        data.append('Username', this.state.Username)
        data.append('PhoneNo', this.state.PhoneNo)
        data.append('Tags', this.state.Tags)
        data.append('Workdescription', this.state.Workdescription)
        data.append('Wimage',this.state.Wimage)
    
        axios.post("https://thekkapatta.herokuapp.com/work/post",data)
    .then((response)=>{
        console.log(response)
        alert(" Work Posted Successfully ")
        window.location.href='#';
    })
    .catch((err)=>{
        console.log(err.response)
      alert("!!! Fields Must Not Leave Empty !!!")
})

    }
    render() {
        return (
            <div class='fp'>
                <section id="contact">
                    <div class="section-content">
                        <h1 class="section-header"><span class="content-header wow fadeIn " data-wow-delay="0.2s"
                            data-wow-duration="2s">POST the WORK that needs to be done</span></h1>
                    </div>
                    <div class="contact-section">
                        <div class="container">
                            <form>
                                <div class="col-md-6 form-line">
                                    <div class="form-group">
                                       <label for="exampleInputUsername">Your name</label>
                                        <input type="text" class="form-control" id="" placeholder=" Enter Name" value={this.state.FullName}
                                        />
                                    </div>
                                    <div class="form-group">
                                       <label for="exampleInputUsername">Your Username</label>
                                        <input type="text" class="form-control" id="" placeholder=" Enter Name" value={this.state.Username}
                                        />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputPhoneNo">Enter Phone Number</label>
                                        <input type="text" class="form-control" id="exampleInputPhoneNo"
                                            placeholder=" Enter Phone Number" value={this.state.PhoneNo}/>
                                    </div>
                                    <div class="form-group">
                                       <label for="picture">Picture</label>
                                        <input type="file" class="form-control" id="picture"
                                            placeholder=" Upload the picture" onChange={this.fileHandler}/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputtext">Tags</label><br/>
                                        <h4><select name="tags" id="tags" value={this.state.Tags} 
                                        onChange={(event) => { this.setState({ Tags: event.target.value }) }}>
                                            <option value="plumber">Plumber</option>
                                            <option value="mechanic">Mechanic</option>
                                            <option value="Construction">Construction</option>
                                        </select>
                                        </h4>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                      <label for="description"> Work Description</label>
                                        <textarea class="form-control" id="description" placeholder="Enter Your Message" 
                                        value={this.state.Workdescription} onChange={(event) => { this.setState({ Workdescription: event.target.value }) }}></textarea>
                                    </div>
                                    <div>

                                    <h4><input type="submit" value="Post the Work" onClick={this.Workpost} /></h4>
                                    </div>

                                </div>
                            </form>
                        </div>
                        </div>
	            </section>
            </div>
        )
    }
}
export default Workpost
