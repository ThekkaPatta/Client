import { Component } from "react";
import axios from 'axios'
import '../assets/css/adminshowprofile.css'
import swal from "sweetalert";


class Adminusers extends Component{
    state={
        user: []
    }

    componentDidMount(){
        axios.get("http://localhost:550/user/show/" )        
        .then((response)=>{
            console.log(response.data);
            this.setState({
                user :response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        }

        )
    }

    deleteusers = (aid) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Profile!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.delete("http://localhost:550/user/delete/" + aid)
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
                    this.state.user.map((users) => {
                        return (
                            <div>
                                <table class ="table table-stripped">
                                <thead>
                                    <tr>
                                        <th scope="col" width="90px">Fullname</th>
                                        <th scope="col" width="90px">Address</th>
                                        <th scope="col" width="90px">Phone No.</th>
                                        <th scope="col" width="90px">Username</th>
                                        <th scope="col" width="90px">Image</th>
                                        <th scope="col" width="90px">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{users.UFullName}</td>
                                    <td>{users.UAddress}</td>
                                    <td>{users.UPhoneNo}</td>
                                    <td>{users.UUsername}</td>
                                    <td><img class="img-circle" style={{height:"20px", width: "20px"}} src={"http://localhost:550/" + users.ProfileImg}></img></td>
                                    <td>

                                    {}
                                                <p> 
                                                    <a className="btn btn-outline-info p-3" href={"/userprofile/"}> View Profile</a>
                                                    
                                                    <button className="btn btn-danger" onClick={this.deleteusers.bind(this, users._id)}>Delete</button>
                                                </p>
                                        {/* <a className="btn btn-outline-info p-3" href={"/userprofile/"}>View Profile</a>
                                                <a className="btn btn-outline-danger p-3" href={"/deleteuser/"}>  Delete  </a> */}
                                                
                                                
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
export default Adminusers