import { Component } from "react";
import axios from 'axios'
import '../assets/css/adminshowprofile.css'
import swal from "sweetalert";


class Adminworkers extends Component{
    state={
        worker: []
    }

    componentDidMount(){
        axios.get("http://localhost:550/worker/show/" )        
        .then((response)=>{
            console.log(response.data);
            this.setState({
                worker :response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        }

        )
    }

    deleteworkers = (aid) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this profile!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete("http://localhost:550/worker/delete/" + aid)
            .then((response) => {
                })
            .catch((err) => {
                console.log(err.response)
            })
            window.location.reload();
            }
          });  
    }


    render(){
        return(
            <div className="alignment">
                <br></br><br></br><br></br><br></br>
                {
                    this.state.worker.map((workers) => {
                        return (
                            <div>
                                <table class ="table table-stripped">
                                <thead>
                                    <tr>
                                        <th scope="col" width="90px">Fullname</th>
                                        <th scope="col" width="90px">Address</th>
                                        <th scope="col" width="90px">Phone No.</th>
                                        <th scope="col" width="90px">Skills</th>
                                        <th scope="col" width="90px">Username</th>
                                        <th scope="col" width="90px">Profile Image</th>
                                        <th scope="col" width="90px">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{workers.WFullName}</td>
                                    <td>{workers.WAddress}</td>
                                    <td>{workers.WPhoneNo}</td>
                                    <td>{workers.WSkills}</td>
                                    <td>{workers.WUsername}</td>
                                    <td><img class="img-circle" style={{height:"20px", width: "20px"}} src={"http://localhost:550/" + workers.Wimage}></img></td>
                                    <td>
                                    {}
                                                <p> 
                                                    <a className="btn btn-outline-info p-3" href={"/userprofile/"}> View Profile</a>
                                                    
                                                    <button className="btn btn-danger" onClick={this.deleteworkers.bind(this, workers._id)}>Delete</button>
                                                </p>
                                        </td>
                                                </tr>
                                </tbody>
                                </table>
                            </div>
                        )
                    })
                }
                </div>

        )
    }
}
export default Adminworkers