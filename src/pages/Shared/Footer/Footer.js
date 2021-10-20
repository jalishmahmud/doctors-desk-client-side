import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../../images/logo.png';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const mobile = <FontAwesomeIcon icon={faMobileAlt} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />


const Footer = () => {
    return (
        <div className="mb-2 footer pt-5">
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3} lg={3} >
                        <div>
                            <h3>About us</h3>
                            <img className="mb-3" src={footerLogo} alt="" />
                            <p>Choosing the right hospital and physician are important factors to consider that significantly influence a patient’s treatment. The preferred choice for many patients </p>
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
                    <Col xs={12} sm={6} md={2} lg={2} >
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
                    <Col xs={12} sm={6} md={4} lg={4} >
                        <div>
                            <h3>Head office</h3>
                            <p><span>{map} </span> 121 Wallstreet Street, NY York , USA</p>
                            <p> <span>{mobile} </span> +800 1234 45 67</p>
                            <p> <span>{envelope} </span> info@doctorsdesk.com</p>
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