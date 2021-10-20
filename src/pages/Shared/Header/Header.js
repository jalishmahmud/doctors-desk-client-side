import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.png';
import profilePict from '../../../images/profilePict.png';
import useAuth from '../../../hooks/useAuth'
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {!user?.email ?
                            <Nav.Link as={Link} to="/login"><Button variant="danger">Log in</Button></Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login"><Button onClick={logOut} variant="danger">Log out</Button></Nav.Link>
                        }
                        <Navbar.Text>
                            {user.email &&
                                <span> <b>Welcome ! </b> {user.displayName ?
                                    user.displayName
                                    :
                                    user.email}  <img className="user-photo" src={user.photoURL
                                        ?
                                        user.photoURL
                                        :
                                        profilePict} alt="" /></span>

                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;