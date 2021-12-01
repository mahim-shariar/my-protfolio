import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <Navbar className='back-ground-full-bady'>
            <Container>
                <Navbar.Brand href="#home" className='text-All-color' ><img className='logo-width' src="https://mattfarley.ca/img/mf-logo.svg" alt="" /></Navbar.Brand>
                <Nav className='ms-auto'  >
                    <Navbar.Collapse>
                        <NavLink className='header-color nav-link '  to='/home'>Home</NavLink>
                        <Nav.Link className='header-color' href="#abouts">Abouts</Nav.Link>
                        <Nav.Link className='header-color' href="#project">Project</Nav.Link>
                        <Nav.Link className='header-color' href="#contact">Contact</Nav.Link>
                    </Navbar.Collapse>
                </Nav>

            </Container>
        </Navbar>
    );
};

export default Header;