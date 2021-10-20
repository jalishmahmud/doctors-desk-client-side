import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const mobile = <FontAwesomeIcon icon={faMobileAlt} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />

const Contact = () => {
    return (
        <div>
            <Container>
                <Row className="my-5 contact-us">
                    <Col xs={12} md={6}>
                        <h3>Meet With Us</h3>
                        <div >
                            <p><span className="me-2">{map}</span> 121 Wallstreet Street, NY York , USA</p>
                            <p><span className="me-2">{mobile}</span> +800 1234 45 67</p>
                            <p><span className="me-2">{envelope}</span> info@doctorsdesk.com</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Contact With Us</h3>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="Your Full Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                            </Row>
                            <FloatingLabel controlId="floatingTextarea2" label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button onClick={e => e.preventDefault()} className="mt-3" variant="danger" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;