import { React, useState } from "react";
import '../assets/css/Header.css'
import Notification from '../Components/Notification'
import Modal from "react-modal";;

var menu;
function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true);
    };

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false);
    };

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('_id')
        localStorage.removeItem('usertype')
        window.location.href = '/'
    }

    if (localStorage.getItem('token') && localStorage.getItem('userType') === 'admin') {
        menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row-reverse">
                    <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/adminpost">Posts</a></li>
                        <li class="main_nav_item"><a href="/adminuser">Users</a></li>
                        <li class="main_nav_item"><a href="/adminworker">Workers</a></li>
                        <li class="main_nav_item"><a href="/" onClick={logout}>Log Out</a></li>
                    </ul>
                </div>
            </>
    }

    else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'user') {
        menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row-reverse">
                    <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/userlanding">Home</a></li>
                        <li class="main_nav_item"><a href="/workpost">Work Post</a></li>
                        <li class="main_nav_item"><a href="/ownuserprofile">My Profile</a></li>
                        <li class="main_nav_item"><a onClick={setModalIsOpenToTrue}>Notification</a></li>
                            <li class="main_nav_item"><a href="/" onClick={logout}>Log Out</a></li>
                    </ul>
                </div>

            </>
    }
    else if (localStorage.getItem('token') && localStorage.getItem('userType') === 'worker') {
        menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row-reverse">
                    <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/workerhome">Home</a></li>
                        <li class="main_nav_item"><a href="/workersprofile">My Profile</a></li>
                        <li class="main_nav_item"><a href="/" onClick={logout}>Log Out</a></li>
                    </ul>

                </div>

            </>
    }
    else {
        menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row-reverse">
                    <ul class="main_nav_list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/loginuser">Login as User</a></li>
                        <li><a href="/loginworker">Login as worker</a></li>

                    </ul>
                </div>

            </>
    }
    return (
        <>
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
            <div class="float-right">
                <Modal 
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    style={{
                        overlay: {
                            justifyContent: "right",
                            marginTop: '4.1%',      
                            background: "transparent",
                            zIndex:"1"

                        },
                        content: {
                            float:"right",
                            width: "500px",
                            height:'600px',
                            backgroundColor: "white",
                            boxShadow: "5px 4px 20px 20px #0000000f",
                            padding: "20px",
                            overflowY:"scroll",
                            overflowX:"hidden"


                        },
                    }}
                    className="notify"
                >
                    <Notification closenotificationmodal={setModalIsOpenToFalse} />
                </Modal>
            </div>
        </>
    )
}
export default Header
