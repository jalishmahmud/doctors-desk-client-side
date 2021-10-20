import React from 'react';
import './WhyChoseUs.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { faBlenderPhone } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const doctor = <FontAwesomeIcon icon={faUserMd} />
const ambulance = <FontAwesomeIcon icon={faAmbulance} />
const contact24 = <FontAwesomeIcon icon={faBlenderPhone} />
const rightArrow = <FontAwesomeIcon icon={faArrowRight} />

const WhyChoseUs = () => {
    return (
        <div id="why-chose-us" className="single-doctor text-center mt-5">
            <div className="mb-5">
                <h5 className="mb-3">24/7 SERVICE</h5>
                <h2>Why Chose Us</h2>
            </div>
            <Container>
                <Row >
                    <Col xs={12} md={4}>
                        <div className="single-why-chose-us border mb-3 p-4 pb-5 rounded shadow ">
                            <span className="custom-icon mt-2">{doctor}</span>
                            <h5 className="mt-4 mb-3">We Have</h5>
                            <h3 className="border-bottom pb-3 mb-3">Qualified doctors</h3>
                            <p>Experienced and devoted doctors are ready to help you with your problems. Donec vel pellentesque mas.</p>
                            <Link to="/">Read More {rightArrow}</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="single-why-chose-us border  mb-3 p-4 pb-5 rounded shadow ">
                            <span className="custom-icon mt-2">{ambulance}</span>
                            <h5 className="mt-4 mb-3">We Provide</h5>
                            <h3 className="border-bottom pb-3 mb-3">Emergency care</h3>
                            <p>We are always ready to help you at the time you need help! Our emergency team is here for you!</p>
                            <Link to="/">Read More {rightArrow}</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="single-why-chose-us border  mb-3 p-4 pb-5 rounded shadow ">
                            <span className="custom-icon mt-2">{contact24}</span>
                            <h5 className="mt-4 mb-3">We Ensure</h5>
                            <h3 className="border-bottom pb-3 mb-3">24 Hours service</h3>
                            <p>Anytime you need help, you may contact us and our receptionist will make an appointment for you.</p>
                            <Link to="/">Read More {rightArrow}</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyChoseUs;