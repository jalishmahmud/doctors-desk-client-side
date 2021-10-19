import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <Container >
                <Row className="py-5" >
                    <Col className="text-light pt-5 mt-5" lg={8}>
                        <div className="border-start border-5 border-danger ps-3 box-shadow-sm">
                            <h1 >Quality care</h1>
                            <h2>To life for the whole family</h2>
                        </div>
                        <p className="my-4">Professional care for your health, We provide total health care</p>
                        <div className="pb-5 mb-5">
                            <span className="pe-4 "><Link to="/appointment"><Button variant="danger" size="lg">Get Appointment</Button></Link></span>

                            <span className="pe-4"><Link to="/contact"><Button variant="primary" size="lg">Contact Us</Button></Link></span>
                        </div>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;