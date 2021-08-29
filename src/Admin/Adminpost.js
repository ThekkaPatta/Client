import { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/workerhome.css'
import swal from "sweetalert";

class Adminpost extends Component {
    state = {
        work: [],
        search: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:550/work/show")

            .then((response) => {
                console.log(response.data)
                this.setState({
                    work: response.data
                })

            })
            .catch()
    }

    deleteusers = (aid) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Work Post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete("http://localhost:550/work/delete/" + aid)
            .then((response) => {
                })
            .catch((err) => {
                console.log(err.response)
            })
            window.location.reload();
              

            }
          });
        
    }



    render() {
        return (
            <div className="container">
             <div classNamer="row p-5">
                    <div className="col p-5">
                        <br></br><br></br><br></br>
                        <input type='text' placeholder='Search Bar' value={this.state.search}
                            onChange={(event) => { this.setState({ search: event.target.value }) }} />
                        <div class="wrapper">
                            {
                                this.state.work.filter((mywork) => {
                                    if (this.state.search == "") {
                                        return mywork
                                    }
                                    else if (mywork.Tags.toLowerCase().includes(this.state.search.toLowerCase())) {
                                        return mywork
                                    }
                                    else if (mywork.Workdescription.toLowerCase().includes(this.state.search.toLowerCase())) {
                                        return mywork
                                    }

                                }).map((mywork) => {
                                    return (
                                        <div className="card">
                                            <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"http://localhost:550/" + mywork.ProfileImg} />
                                            <h4 className="card-title p-2">{mywork.Tags}</h4>
                                            <h5 className="card-title p-3">{mywork.Workdescription}</h5>
                                            <h2><button className="btn btn-danger" onClick={this.deleteusers.bind(this, mywork._id)}>Delete</button></h2>
                                            <br></br><br></br><br></br>
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Adminpost