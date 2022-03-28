import React, { useState, useEffect } from 'react'

import { navigate } from "@reach/router";

import { Navbar, Container, Nav, Button } from 'react-bootstrap'


import axios from 'axios';
import _ from 'lodash';

const Navigationbar = () => {

    const handleLogout = (e) => {
        axios.get('http://localhost:8000/logout', {
            withCredentials: true
        })
            .then(res => {
                console.log("Response: ", res)
                localStorage.removeItem('cartItems')
                sessionStorage.clear();
                navigate("/login")
            })
            .catch(err => {
                console.log("Error: ", err)
            })
    };



    //-----------------------------------
    // III) JSX
    // ----------------------------------

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Riya's Bracelet Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/account">Account</Nav.Link>
                        <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                    </Nav>
                        <Button onClick={() => {handleLogout()}} variant="btn btn-outline-secondary" >Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar
