import { Component } from "react";
import Workpost from '../Components/User/Workpost'
import { Route } from 'react-router-dom';
import Loginuser from "../Components/User/Loginuser";
import Loginworker from "../Components/Worker/Loginworker";
import Home from "../Components/Home";
import Registeruser from "../Components/User/Registeruser";
import Registerworker from "../Components/Worker/Registerworker";
import Workerhome from "../Components/Worker/Workerhome";
import Bidwork from "../Components/Worker/Bidwork";

import Adminlogin from "../Admin/Adminlogin";
import Userhome from "../Components/User/Userlanding";
import UserEditProfile from "../Components/User/UserEditProfile";
import WorkerEditProfile from "../Components/Worker/WorkerEditProfile";
import WorkersProfile from "../Components/Worker/Worker'sProfile";
import Workbidder from "../Components/User/Workbidder";
import Profile from "../Components/User/Profile";
import Adminpost from "../Admin/Adminpost";
import Adminusers from "../Admin/Adminusers";
import Favorites from "../Components/User/Favorites";
import Adminworkers from "../Admin/Adminworkers";
import DataTable from "../Admin/Adminusers";
import Ownuserprofile from "../Components/User/ownuserprofile";
import Workhistory from "../Components/Worker/Workhistory";
import Userhistory from "../Components/User/Userhistory";

import Messenger from '../Components/Messenger/Messenger';
import Hiredworker from '../Components/User/Hiredworker'



class Container extends Component{
    render(){
        return(
            <div style={{height:'calc(100vh - 80px)'}}>
                <Route path="/workpost" component={Workpost} />
                <Route path="/ownuserprofile" component={Ownuserprofile}/>
                <Route path="/loginuser" component={Loginuser} />
                <Route path="/loginworker" component={Loginworker} />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/registeruser" component={Registeruser} />
                <Route path="/registerworker" component={Registerworker} />
                <Route path="/workerhome" component={Workerhome} />
                <Route path="/bidwork/:id" component={Bidwork} />             
                <Route path="/adminlgn" component={Adminlogin} />
                <Route path="/profile/:WUsername" component={Profile} />
                <Route path="/useredit" component={UserEditProfile} />
                <Route path="/workeredit" component={WorkerEditProfile} />
                <Route path="/workersprofile" component={WorkersProfile} />               
                <Route path='/userlanding' component={Userhome}/>
                <Route path='/workbidder/:_id' component={Workbidder}/>
                <Route path='/adminpost' component={Adminpost}/>
                <Route path='/adminuser' component={Adminusers}/>
                <Route path='/fav' component={Favorites}/>
                <Route path='/adminuser' component={DataTable}/>
                <Route path='/adminworker' component={Adminworkers}/>
                <Route path='/workhistory' component={Workhistory}/>
                <Route path='/userhistory' component={Userhistory}/>
                
                <Route path ='/messenger' component={Messenger}/>
                <Route path ='/hiredworker' component={Hiredworker}/>

                
                
            </div>
        )
    }

}
export default Container