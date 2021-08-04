import { Component } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component"

class Review extends Component{
    state = {
        Ratenum: ""
      }


    RatePost = (e) => {
           const data = new FormData()

        data.append('Ratenum',this.state.Ratenum)

         axios.post("http://localhost:550/rate/post", data)
            .then((response)=>{
                 alert('Done Rating !!')
            })
            .catch(err => {
                console.log(err)
            })
    }
   
    render(){
        const ratingChanged= (rating) => {
            this.state.Ratenum = rating;
            this.RatePost();
        };
    return(
        <div>
            <ReactStars size={30} count={5} isHalf={true} onChange={ratingChanged}/>
            {/* onChange={this.RatePost.bind(this,$rating)} */}
        </div>
    );
    }
}

export default Review