import { Component } from "react";
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
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
            <div className="container">
                <div classNamer="row p-5">
                    <div className="col p-5">

                        {
                            this.state.work.map((mywork) => {
                                return (
                                    <div className="col-md-4 p-4">
                                        <div className="card">

                                            <div className="card-body p-0 ">
                                                <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"http://localhost:550/" + mywork.Wimage} />
                                                <h4 className="card-title p-2">{mywork.Tags}</h4>
                                                <h3 className="card-title p-2">{mywork.FullName}</h3>
                                                <h5 className="card-title p-3">

                                                    {mywork.Workdescription}
                                                </h5>

                                                <div className="text-center p-0">
                                                    <p>
                                                        <a className="btn btn-outline-info p-3" href={"#" + mywork._id}>!! BId Now !!</a>

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Workerhome