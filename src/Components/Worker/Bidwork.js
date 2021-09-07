import { Component } from "react";
import '../../assets/css/Worker/bid.css';
import axios from 'axios';

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Bidwork extends Component {
    state = {
        WUsername: "",
        UUsername: "",
        Wtitle: '',
        id: this.props.match.params.id,
        Bidprice: "",
        Worktime: ""
    }
    componentDidMount() {
        var wid = localStorage.getItem('_id');
        axios.get("http://localhost:550/worker/single/" + wid)
            .then((response) => {
                console.log(response)
                this.setState({
                    WUsername: response.data.WUsername,
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
        axios.get("http://localhost:550/work/single/" + this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    UUsername: response.data.Username,
                    Wtitle: response.data.WorkTitle
                })
            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    sendUserData = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('WUsername', this.state.WUsername)
        data.append('UUsername', this.state.UUsername)
        data.append('Wid', this.state.id)
        data.append('Wtitle', this.state.Wtitle)
        data.append('Bidprice', this.state.Bidprice)
        data.append('Worktime', this.state.Worktime)
        data.append('nType', 'Bid')

        axios.post("http://localhost:550/bid/post", data)
            .then((response) => {
                toast.success("Bid Successful", { autoClose: 1500 })
                setTimeout(() => {
                    this.props.history.push("/workerhome")
                }, 1500);
                
            }).catch(err => {
                console.log(err)
                alert("!! Field Must Not Be Empty !!")
            })
    }

    render() {
        return (
            <div className='Bidpage'>
                <div className='Bidform'>
                
                    <form method="POST" enctype="multipart/form-data" className='col-md-12'>

                        <p classname='label'>Worker Username</p>
                        <input type="text" className='bidval' value={this.state.WUsername} />


                        <p classname='label'>User Username</p>
                        <input type="text" className='bidval' value={this.state.UUsername} />

                        <p classname='label'>Bid Price (RS.)</p>
                        <input type="text" className='bidval' value={this.state.Bidprice}
                            onChange={(event) => { this.setState({ Bidprice: event.target.value }) }} />

                        <p classname='label'>Work Time (In Hours)</p>
                        <input type="text" className='bidval' value={this.state.Worktime}
                            onChange={(event) => { this.setState({ Worktime: event.target.value }) }} />
                        <div>
                            <button className='btnbid' type="submit" onClick={this.sendUserData}> Bid </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Bidwork