import { SettingsInputComponentSharp } from '@material-ui/icons';
import react, {Component, useState} from 'react';
import {Tab, Nav, NavDropdown} from 'react-bootstrap';

const conver_key = 'conversations'
const contact_key = 'contacts'

export default function sidebar() {

        return(
            <div style={{ width: '250px'}} className="d-flex flex-column">
            <Tab.container >
                <Nav variant="tabs" className="justify-content-centre">
                    <Nav.Item>
                        <Nav.Link eventkey={conver_key}>conversations
                        </Nav.Link>
                        <Nav.Link eventkey={contact_key}>
                            contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Tab.container>
            </div>
        )

    }
  