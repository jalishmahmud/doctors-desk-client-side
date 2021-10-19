import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="mb-2 footer pt-5">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3} lg={3} >
                        <div>
                            <h3>About us</h3>
                            <p>Choosing the right hospital and physician are important factors to consider that significantly influence a patient’s treatment. The preferred choice for many patients is choosing private care.ss</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3} >
                        <div>
                            <h3>Departments</h3>
                            <ul>
                                <li><Link to="/">Consultation</Link></li>
                                <li><Link to="/">Diagnosis</Link></li>
                                <li><Link to="/">Treatment</Link></li>
                                <li><Link to="/">Pregnancy care</Link></li>
                                <li><Link to="/">Pediatric</Link></li>
                                <li><Link to="/">Online help</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3} >
                        <div>
                            <h3>Links</h3>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/appointment">Appointment</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} lg={3} >
                        <div>
                            <h3>Head office</h3>
                            <p>121 Wallstreet Street, NY York , USA</p>
                            <p>+800 1234 45 67</p>
                            <p>info@doctorsdesk.com</p>
                        </div>
                    </Col>
                </Row>
                <Row className="border-top pt-4 mt-5">
                    <p className="text-center"> Doctor's Desk &copy; 2021,  All Rights Reserved</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;