import { Component } from "react";
import '../assets/css/Header.css'

class Header extends Component {
    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('_id')
        localStorage.removeItem('usertype')
        window.location.href = '/'
    }
    render() {
        if (localStorage.getItem('token') && localStorage.getItem('userType') == 'admin') {
            var menu =
                <>
                    <div class="main_nav_container ml-auto col d-flex flex-row">
                        <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/workpost">Work Post</a></li>
                            <li class="main_nav_item"><a href="/" onClick={this.logout}>Log Out</a></li>
                        </ul>
                    </div>
                </>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('userType') == 'user') {
            var menu =
                <>
                    <div class="main_nav_container ml-auto col d-flex flex-row">
                        <ul class="main_nav_list">
                            <li class="main_nav_item"><a href="/userlanding">Home</a></li>
                            <li class="main_nav_item"><a href="/workpost">Work Post</a></li>
                            <li class="main_nav_item"><a href="/" onClick={this.logout}>Log Out</a></li>
                        </ul>
                    </div>
                </>
        }
        else if (localStorage.getItem('token') && localStorage.getItem('userType') == 'worker') {
            var menu =
                <>
                    <div class="main_nav_container ml-auto col d-flex flex-row">
                        <ul class="main_nav_list">
                            <li class="main_nav_item"><a href="/homeworker">Home</a></li>
                            
                            <li class="main_nav_item"><a href="/" onClick={this.logout}>Log Out</a></li>
                        </ul>
                    </div>
                </>
        }
        else {
            var menu =
                <>
                    <div class="main_nav_container ml-auto col d-flex flex-row">
                        <ul class="main_nav_list">
                        <li><a href="/">Home</a></li>
                            <li><a href="/loginuser">Login as User</a></li>
                            <li><a href="/loginworker">Login as worker</a></li>

                        </ul>
                    </div>

                </>
        }
        return (
            <header>
                <div class="container">
                    <div class="logo-box">
                        <a href="/">
                            <img src="https://html5book.ru/wp-content/uploads/2015/01/logo-header.png" />
                        </a>
                    </div>
                    <nav>
                        {menu}
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header
