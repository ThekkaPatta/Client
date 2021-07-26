import { Component } from "react";
import Workpost from '../Components/Workpost'
import { Route } from 'react-router-dom';
import Loginuser from "../Components/Loginuser";
import Loginworker from "../Components/Loginworker";
import Home from "../Components/Home";
import Registeruser from "../Components/Registeruser";
import Registerworker from "../Components/Registerworker";
import Workerhome from "../Components/Workerhome";
import Bidwork from "../Components/Bidwork";
// import Rating from "../Components/Rating";
import register from "../Components/register";
import Workerprofile from "../Components/Workerprofile";
import Profile from "../Components/profile";
import Adminlogin from "../Admin/Adminlogin";


class Container extends Component{
    render(){
        return(
            <div>
                <Route path="/workpost" component={Workpost} />
                <Route path="/loginuser" component={Loginuser} />
                <Route path="/loginworker" component={Loginworker} />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/registeruser" component={Registeruser} />
                <Route path="/registerworker" component={Registerworker} />
                <Route path="/workerhome" component={Workerhome} />
                <Route path="/bidwork" component={Bidwork} />
                {/* <Route path="/rating" componsent={Rating}/> */}
                <Route path="/register" component={register} />
                <Route path="/workerprofile" component={Workerprofile} />
                <Route path="/profile" component={Profile} />
                <Route path="/adminlgn" component={Adminlogin} />
            </div>
        )
    }

}
export default Container