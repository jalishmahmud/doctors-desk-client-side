import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/aboutUs.jpg';
const About = () => {
    return (
        <div>
            <Container>
                <Row className="my-5 contact-us">
                    <Col className="p-5" xs={12} md={6}>
                        <img className="img-fluid" src={aboutImg} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>About Us</h3>
                        <h4>Clinic with innovative approach to treatment!</h4>
                        <p>We provide the most full medical services, so every person could
                            have the opportunity to receive qualitative medical help.
                        </p>
                        <p>“One of the most important factors about people’s lives is the information of, the
                            use of, and the growing knowledge of medicine. Medicine is a form of art. It depends on how skillfully doctors apply their knowledge when dealing with patients.”</p>
                        <span className="me-4"><Link to="/appointment"><Button variant="danger">Book Appointment</Button></Link></span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;