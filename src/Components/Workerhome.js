import { Component } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import '../assets/css/workpage.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'

class Workerhome extends Component {
    state = {
        work: [],
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

    render() {
        return (
//             <div className="container">
//                 <div classNamer="row p-5">
//                     <div className="col p-5">

//                         {
//                             this.state.work.map((mywork) => {
//                                 return (
//                                     <div>
//                                     <div className="col-md-4 p-4">
//                                         <div className="card">

//                                             <div className="card-body p-0 ">
//                                                 <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"http://localhost:550/" + mywork.Wimage} />
//                                                 <h4 className="card-title p-2">{mywork.Tags}</h4>
//                                                 <h3 className="card-title p-2">{mywork.FullName}</h3>
//                                                 <h5 className="card-title p-3">

//                                                     {mywork.Workdescription}
//                                                 </h5>
//                                                 <div class="text-center">
//   <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalContactForm">Launch
//     Modal Contact Form</a>
// </div>
// <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
//   aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header text-center">
//         <h4 class="modal-title w-100 font-weight-bold">Write to us</h4>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body mx-3">
//         <div class="md-form mb-5">
//           <i class="fas fa-user prefix grey-text"></i>
//           <input type="text" id="form34" class="form-control validate"/>
//           <label data-error="wrong" data-success="right" for="form34">Your name</label>
//         </div>

//         <div class="md-form mb-5">
//           <i class="fas fa-envelope prefix grey-text"></i>
//           <input type="email" id="form29" class="form-control validate"/>
//           <label data-error="wrong" data-success="right" for="form29">Your email</label>
//         </div>

//         <div class="md-form mb-5">
//           <i class="fas fa-tag prefix grey-text"></i>
//           <input type="text" id="form32" class="form-control validate"/>
//           <label data-error="wrong" data-success="right" for="form32">Subject</label>
//         </div>

//         <div class="md-form">
//           <i class="fas fa-pencil prefix grey-text"></i>
//           <textarea type="text" id="form8" class="md-textarea form-control" rows="4"></textarea>
//           <label data-error="wrong" data-success="right" for="form8">Your message</label>
//         </div>

//       </div>
//       <div class="modal-footer d-flex justify-content-center">
//         <button class="btn btn-unique">Send <i class="fas fa-paper-plane-o ml-1"></i></button>
//       </div>
//     </div>
//   </div>
// </div>

//                                             </div>
//                                         </div>
//                                     </div>


  


//                                 </div>
                            

//                                 )
                            

//                             })
//                         }
//                     </div>
//                 </div>
//             </div>

<div class="workpage">
<div className="container">
         <button type="button" class="btn btn-primary mt-5 mb-5" data-toggle="modal" data-target="#myModal">
          Open modal
        </button>
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
     
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      
      <div class="modal-body">
        Modal body..
      </div>
     
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>
</div>
        )
    }
}
export default Workerhome