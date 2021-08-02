import { Component } from "react";
import '../assets/css/register.css';
import axios from 'axios';

class Bidwork extends Component {
    state = {
        WUsername: "",
        id: this.props.match.params.id,
        Bidprice: "",
        Worktime: ""
    }
    componentDidMount(){
        var wid = localStorage.getItem('_id');
        alert(wid)
        axios.get("http://localhost:550/worker/single/" +wid)
            .then((response)=>{
                console.log(response)
                this.setState({
                    WUsername : response.data.WUsername,
                })
            })
            .catch((err)=>{
                console.log(err.response)
        })
    }
    sendUserData = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('WUsername', this.state.WUsername)
        data.append('Wid', this.state.id)
        data.append('Bidprice', this.state.Bidprice)
        data.append('Worktime', this.state.Worktime)

        axios.post("http://localhost:550/bid/post", data)
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
                                <p>Username:<input type="text" value={this.state.WUsername}/></p>
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
export default Bidwork