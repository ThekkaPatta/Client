import { React, useEffect, useState } from "react";
import '../assets/css/Header.css'
import Notification from '../Components/Notification'
import Modal from "react-modal";


function Header() {
    var menu;

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
        localStorage.removeItem('userType')
        localStorage.removeItem('username')
        window.location.href = '/'
    }

    if (localStorage.getItem('userType') === 'admin') {
        menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row-reverse">
                    <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/adminpost">Posts</a></li>
                        <li class="main_nav_item"><a href="/adminuser">Users</a></li>
                        <li class="main_nav_item"><a href="/adminworker">Workers</a></li>
                        <li class="main_nav_item"><a href="/" onClick={logout}><i class="fa fa-sign-out" aria-hidden="true"></i> Log Out</a></li>
                    </ul>
                </div>
            </>
    }

    else if (localStorage.getItem('userType') === 'user') {
        menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row-reverse">
                    <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/userlanding"><i class="fa fa-briefcase" aria-hidden="true"></i> My Works </a></li>
                        <li class="main_nav_item"><a href="/workpost"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Work Post</a></li>
                        <li class="main_nav_item"><a href="/fav"><i class="fa fa-heart" aria-hidden="true"></i> MY Favorites</a></li>
                        <li class="main_nav_item"><a href="/userhistory"><i class="fa fa-history" aria-hidden="true"></i> MY History</a></li>
                        <li class="main_nav_item"><a href="/ownuserprofile" id="ownus"><i class="fa fa-user" aria-hidden="true"></i> My Profile</a></li>
                        <li class="main_nav_item"><a className="noti" onClick={setModalIsOpenToTrue}><i class="fa fa-bell" aria-hidden="true"></i> Notification</a></li>
                        <li class="main_nav_item"><a href="/messenger">My Messages</a></li>
                        <li class="main_nav_item"><a href="/" onClick={logout}>Log Out</a></li>
                    </ul>
                </div>

            </>
    }
    else if (localStorage.getItem('userType') === 'worker') {
        menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row-reverse">
                    <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/workerhome"><i class="fa fa-briefcase" aria-hidden="true"></i> Works</a></li>
                        <li class="main_nav_item"><a href="/workersprofile"><i class="fa fa-user" aria-hidden="true"></i> My Profile</a></li>
                        <li class="main_nav_item"><a href="/workhistory"><i class="fa fa-history" aria-hidden="true"></i> Work History</a></li>
                        <li class="main_nav_item"><a className="color" onClick={setModalIsOpenToTrue}><i class="fa fa-bell" aria-hidden="true"></i> Notification</a></li>
                        <li class="main_nav_item"><a href="/messenger">My Messages</a></li>
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
                <div class="containernav">
                    <div class="logo-box">
                        <a className="logo" href="/">ThekkaPatta
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
                            zIndex: "1"

                        },
                        content: {
                            float: "right",
                            width: "500px",
                            height: '600px',
                            backgroundColor: "white",
                            boxShadow: "5px 4px 20px 20px #0000000f",
                            padding: "20px",
                            overflowY: "scroll",
                            overflowX: "hidden"


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
