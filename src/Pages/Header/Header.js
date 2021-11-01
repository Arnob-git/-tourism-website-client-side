import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <Navbar bg="light" expand="lg" sticky='top' className='mt-2'>
            <Container>
                <Navbar.Brand as={Link} to='/home'>Contiky</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#tour">Tour Plan</Nav.Link>
                        {user?.email ?
                            <>
                                <Nav.Link as={Link} to="/booking">Booking Management</Nav.Link>
                                <Button onClick={logOut} className='border border-3  rounded' variant="light">{user?.displayName}&nbsp; &nbsp; Logout</Button>
                            </> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;