import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container>
                <Row className="my-5 contact-us">
                    <Col xs={12} md={6}>
                        <h3>Meet With Us</h3>
                        <div>
                            <p>Address: 121 Wallstreet Street, NY York , USA</p>
                            <p>Phone: +800 1234 45 67</p>
                            <p>Email: info@doctorsdesk.com</p>
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
                            <Button className="mt-3" variant="danger" type="submit">
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