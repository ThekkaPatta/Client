import { Component } from "react";
import axios from 'axios';
import '../assets/css/Worker/workerhome.css'
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
            <div className="admincontainer" style={{paddingTop:'10px'}}>
                <div className='worksearch-box'>
                    <input className='worksearch-text' type='text' name='' placeholder='Type to search'
                         onChange={(event) => { this.setState({ search: event.target.value }) }}></input>
                    <a className='worksearch-btn' href='#'><i className='fa fa-search'></i></a>
                </div>
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
                                <div class="row product-list">
                                    <section class="panel">
                                        <div class="pro-img-box">
                                            <img src={"http://localhost:550/" + mywork.WorkImg} alt="" />
                                            <div className='openworkd'>
                                                <div class="sworkdescription">
                                                    <i class="fa fa-eye"></i>
                                                </div>
                                                <div className='content'>
                                                    <h2 style={{ color: 'Green' }}>Work Description</h2>
                                                    <p style={{ color: "black", fontSize: '15px' }}> {mywork.Workdescription}</p>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="panel-body text-center">
                                            <p class="wTitle">{mywork.WorkTitle}</p>
                                            <button id='btnbid' className="btn btn-outline-danger" onClick={this.deleteusers.bind(this, mywork._id)}> Delete Post</button>
                                        </div>
                                    </section>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Adminpost