import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <Container>
            <Row className="my-5 contact-us">
                <Col xs={12} md={6}>
                    <div>
                        <h3>Subscribe To Our Newslatter</h3>
                        <Form>
                            <Row className="align-items-center">
                                <Col sm={9} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                                        Username
                                    </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>@</InputGroup.Text>
                                        <FormControl id="inlineFormInputGroupUsername" placeholder="Your Email" />
                                    </InputGroup>
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button onClick={e => e.preventDefault()} variant="danger" type="submit">Subscribe</Button>
                                </Col>
                            </Row>
                        </Form>
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
    );
};

export default ContactUs;