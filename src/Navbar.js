import React, { Component } from 'react';
import logo from './logo.svg';
//import './Navbar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignupModal from './SignupModal';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StickyNavbar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { modalShow: false };
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleShowModal() {
        this.setState({ showModal: true });
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        return (
        <Navbar  bg="light" sticky="top" >
            <Navbar.Brand><Link to="/">LearnStart</Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="#signin" onClick={() => this.setState({ modalShow: true })}>
                Sign In</Nav.Link>
            </Navbar.Collapse>
            <SignupModal show={this.state.modalShow} onHide={modalClose}/>
        </Navbar>
        );
    }
}
export default StickyNavbar;

