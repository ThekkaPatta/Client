import { Component } from "react";
import axios from 'axios'
import '../assets/css/Userlanding.css'


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


    render(){
        return(
            <div className="alignment">
                <br></br><br></br><br></br><br></br>
                {
                    this.state.user.map((users) => {
                        return (
                            <div className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Fullname</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Phone No.</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Image</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{users.UFullName}</td>
                                    <td>{users.UAddress}</td>
                                    <td>{users.UPhoneNo}</td>
                                    <td>{users.UUsername}</td>
                                    <td><img class="img-circle" style={{height:"20px", width: "20px"}} src={"http://localhost:550/" + users.Uimage}></img></td>
                                    <td><a className="btn btn-outline-info p-3" href={"/userprofile/"}>View Profile</a>
                                                <a className="btn btn-outline-danger p-3" href={"/deleteuser/"}>  Delete  </a></td>
                                                </tr>
                                </tbody>
                            </div>
                        )
                    })
                }
                </div>

        )
    }
}
export default Adminusers