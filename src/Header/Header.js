import { Button } from "bootstrap";
import { Component, React, useState } from "react";
import '../assets/css/Header.css'
import Notification from '../Components/Notification'
import Modal from "react-modal";

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

    if (localStorage.getItem('token') && localStorage.getItem('userType') == 'admin') {
        var menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row">
                    <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/workpost">Work Post</a></li>
                        <li class="main_nav_item"><a href="/" onClick={logout}>Log Out</a></li>
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
                        <li class="main_nav_item"><a onClick={setModalIsOpenToTrue}>Notification</a></li>
                        <li class="main_nav_item">
                            <div style={{ padding: "20px" }}>
                            </div>
                            <Modal
                                isOpen={modalIsOpen}
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                style={{
                                    overlay: {
                                        justifyContent: "center",
                                        display: "flex",
                                    },
                                    content: {
                                        width: "50%",
                                        minHeight: "25%",
                                        margin: "auto",
                                        backgroundColor: "white",
                                        boxShadow: "5px 4px 20px 20px #0000000f",
                                        padding: "20px",
                                        position: "relative",
                                    },
                                }}
                                className="notify"
                            >
                                <Notification closenotificationmodal={setModalIsOpenToFalse} />
                            </Modal></li>
                    </ul>
                </div>
            </>
    }
    else if (localStorage.getItem('token') && localStorage.getItem('userType') == 'worker') {
        var menu =
            <>
                <div class="main_nav_container ml-auto col d-flex flex-row">
                    <ul class="main_nav_list">
                        <li class="main_nav_item"><a href="/workerhome">Home</a></li>
                        <li class="main_nav_item"><a href="/workerprofile">My Profile</a></li>

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
export default Header
