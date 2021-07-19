import { Component } from "react";
import axios from 'axios'

class Userlandingpage extends Component {
    state = {
        Username="",
        works=[]
    }

    componentDidMount() {
        var u_id = localStorage.getItem('_id');
        axios.get("http://localhost:550/user/single/" + u_id)
            .then((response) => {
                console.log(response)
                this.setState({
                    Username: response.data.UUsername,
                })
            })
            .catch((err) => {
                console.log(err.response)
            })

        axios.get("http://localhost:550/work/posted/" + this.state.Username)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    works: response.data
                })

            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.works.map((myworks)=>{
                        return(
                            <div>
                                <p>{myworks.Workdescription}</p>
                                <img class="card-img-top" style={{ height: "300px", width: "500px" }} src={"http://localhost:550/" + mywork.Wimage} />
                            </div>

                        )

                    })

                }
            </div>
        )
    }

}
export default Userlandingpage