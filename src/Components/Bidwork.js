import { Component } from "react";
import '../assets/css/register.css';
import axios from 'axios';

class Registeruser extends Component {
    state = {
        WUsername: "",
        Wid: "",
        Bidprice: "",
        Worktime: ""
    }
    sendUserData = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('WUsername', this.state.WUsername)
        data.append('Wid', this.state.Wid)
        data.append('Bidprice', this.state.Bidprice)
        data.append('Worktime', this.state.Worktime)

        axios.post("https://thekkapatta.herokuapp.com/bid/post", data)
        .then((response)=>{
            alert(response.data.message)
            window.location.href= "/workerhome";
        }).catch(err => {
            console.log(err)
            alert("!! Field Must Not Be Empty !!")
        })
    }

    render() {
        return (
            <section id="contact">
                <div class="main-w3layouts wrapper">
                    <h1>Bid For The Work</h1>
                    <div class="main-agileinfo">
                        <div class="agileits-top">
                            <form method="POST" enctype="multipart/form-data">
                                <p>Username:<input type="text" value={this.state.WUsername}
                                    onChange={(event) => { this.setState({ WUsername: event.target.value }) }} /></p>
                                <p>Work Id:<input type="text" value={this.state.Wid}
                                    onChange={(event) => { this.setState({ Wid: event.target.value }) }} /></p>
                                <p>Bid Price:<input type="text" value={this.state.Bidprice}
                                    onChange={(event) => { this.setState({ Bidprice: event.target.value }) }} /></p>
                                <p>Work Time:<input type="text" value={this.state.Worktime}
                                    onChange={(event) => { this.setState({ Worktime: event.target.value }) }} /></p>
                                <p><input type="submit" onClick={this.sendUserData} />  </p>

                            </form>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
export default Registeruser