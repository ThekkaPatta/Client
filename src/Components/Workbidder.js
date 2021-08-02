import { Component } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom';


class Workbidder extends Component{
    state={
        Wid : this.props.match.params._id,
        bidder: []
    }

    componentDidMount(){
        axios.get("http://localhost:550/works/bidder/" + this.state.Wid)        
        .then((response)=>{
            console.log(response);
                 this.setState({
                bidder :response.data.data
            })
        })
        .catch((err)=>{
            console.log(err)
        }

        )
    }

    Checkbidder=(Wid)=>{
        axios.get("http://localhost:550/worker/bidder/" +Wid)
        .then((response)=>{
            console.log(response)
            window.location.href = "/profile";
        })
        .catch((err)=>{
            console.log(err)
        }

        )

    }

    render(){
        return(
            <div>
                <p>ekfnaeo
                    afujeba
                    a<br></br>
                    alejfuah
                    afkae
                    <br></br>
                    aljefoauhef
                    aefkjbaeb
                    aefkjbaeb
                    <br></br>
                    ekfnaeo
                    afujeba
                    a<br></br>
                    alejfuah
                    afkae
                    <br></br>
                    aljefoauhef
                    aefkjbaeb
                    aefkjbaeb
                    <br></br>
                    ekfnaeo
                    afujeba
                    a<br></br>
                    alejfuah
                    afkae
                    <br></br>
                    aljefoauhef
                    aefkjbaeb
                    aefkjbaeb
                    <br></br>
                    ekfnaeo
                    afujeba
                    a<br></br>
                    alejfuah
                    afkae
                    <br></br>
                    aljefoauhef
                    aefkjbaeb
                    aefkjbaeb
                    <br></br>
                    ekfnaeo
                    afujeba
                    a<br></br>
                    alejfuah
                    afkae
                    <br></br>
                    aljefoauhef
                    aefkjbaeb
                    aefkjbaeb
                    <br></br>
                    ekfnaeo
                    afujeba
                    a<br></br>
                    alejfuah
                    afkae
                    <br></br>
                    aljefoauhef
                    aefkjbaeb
                    aefkjbaeb
                    <br></br>
                </p>
                {
                    this.state.bidder.map((mybidder) => {
                        return (
                            <div>                                
                                <Link to={"/profile/"+mybidder.WUsername}>
                                <p>{mybidder.WUsername}</p><br></br></Link>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}
export default Workbidder