import React from 'react';
import Reactnotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

function just (){

    return(
        <div>
            <Reactnotification/>
            <Home />
        </div>
    );
   
}

function Home(){
    return(
        <div>
            <button>
                click for notification
            </button>

        </div>
    );
}
export default just;