import { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/workerhome.css'

class Workerhome extends Component {
    state = {
        work: [],
        search:"",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("https://thekkapatta.herokuapp.com/work/show")

            .then((response) => {
                console.log(response.data)
                this.setState({
                    work: response.data
                })

            })
            .catch()

    }

    render() {

        return (
            <div className="container">
               
                <div classNamer="row p-5">
                    <div className="col p-5">
                        <br></br>
                    <input type='text' placeholder='Search Bar' value={this.state.search}
                    onChange={(event) => { this.setState({ search: event.target.value }) }} />
                                    <div class="wrapper">
                                        {
                                        this.state.work.filter((mywork) => {
                                            if (this.state.search==""){
                                                return mywork
                                            }
                                            else if(mywork.Tags.toLowerCase().includes(this.state.search.toLowerCase())){
                                                return mywork
                                            } 
                                             else if(mywork.Workdescription.toLowerCase().includes(this.state.search.toLowerCase())){
                                                return mywork
                                            }
                                            
                                        }).map((mywork) => {
                                            return (
                                                <div className="card">
                                                    <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"https://thekkapatta.herokuapp.com/" + mywork.Wimage} />
                                                    <h4 className="card-title p-2">{mywork.Tags}</h4>                                                   
                                                    <h5 className="card-title p-3">{mywork.Workdescription}</h5>
                                                    <h2><Link to={"/bidwork/" + mywork._id}> Bid Now </Link></h2>
                                                </div>


                                            )
                                        })

                                        }
                                    </div>
                            
                </div>
                </div>
            </div >


        )
    }
}
export default Workerhome