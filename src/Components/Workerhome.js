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
          <div>
            
          </div>
        )
    }
}
export default Workerhome