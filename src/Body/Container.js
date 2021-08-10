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
import Workerprofile from "../Components/Workerprofile";
import Adminlogin from "../Admin/Adminlogin";
import userhome from "../Components/Userlanding";
import Userprofile from "../Components/UserProfile";
import UserEditProfile from "../Components/UserEditProfile";
import WorkerEditProfile from "../Components/WorkerEditProfile";
import WorkersProfile from "../Components/Worker'sProfile";
import Workbidder from "../Components/Workbidder";
import Profile from "../Components/Profile";
import Adminpost from "../Admin/Adminpost";
import Adminusers from "../Admin/Adminusers";



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
                <Route path="/bidwork/:id" component={Bidwork} />
                <Route path="/workerprofile" component={Workerprofile} />
                <Route path="/adminlgn" component={Adminlogin} />
                <Route path="/profile/:WUsername" component={Profile} />
                <Route path="/userprofile" component={Userprofile} />
                <Route path="/useredit" component={UserEditProfile} />
                <Route path="/workeredit" component={WorkerEditProfile} />
                <Route path="/workersprofile" component={WorkersProfile} />               
                <Route path='/userlanding' component={userhome}/>
                <Route path='/workbidder/:_id' component={Workbidder}/>
                <Route path='/adminpost' component={Adminpost}/>
                <Route path='/adminuser' component={Adminusers}/>
                
                
            </div>
        )
    }

}
export default Container