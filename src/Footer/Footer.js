import { Component } from "react";
import '../assets/css/Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer class="site-footer">
                  <div >
                    <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                      <a href="/">Thekkapatta</a>.
                    </p>
                  </div>
                  <div >
                    <ul class="social-icons">
                      <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                      <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </footer>
        )
    }

}
export default Footer