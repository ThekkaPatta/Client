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
import userhome from "../Components/Userlandingpage";
import Userprofile from "../Components/UserProfile";
import UserEditProfile from "../Components/UserEditProfile";
// import Bidwork from "../Components/Bidwork";
// import Rating from "../Components/Rating";
import Userlanding from '../Components/Userlandingpage'
import Workbidder from '../Components/Workbidder'



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
                <Route path="/userhome" component={userhome} />
                <Route path="/userprofile" component={Userprofile} />
                <Route path="/useredit" component={UserEditProfile} />
                
                
                <Route path='/userlanding' component={Userlanding}/>
                <Route path='/workbidder/:_id' component={Workbidder}/>
                
            </div>
        )
    }

}
export default Container