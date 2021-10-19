import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import appointmentImg from '../../images/appointment.png';
const Appointment = () => {
    return (
        <div>
            <Container>
                <Row className="my-5 contact-us">
                    <Col className="p-5" xs={12} md={6}>
                        <img className="img-fluid" src={appointmentImg} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Book Appointment</h3>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="Text" placeholder="Phone" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="date" placeholder="Date" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="time" placeholder="Time" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="Doctors Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Sign" />
                                </Form.Group>
                            </Row>
                            <Button className="mt-3" variant="danger" type="submit">
                                Confirm
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appointment;