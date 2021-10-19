import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import servicePageImg from '../../images/servicePageImg.png';
import WhyChoseUs from '../Home/WhyChoseUs/WhyChoseUs';
const Services = () => {
    return (
        <div>
            <Container>
                <Row className="my-5 contact-us">
                    <Col xs={12} md={6}>
                        <img className="img-fluid" src={servicePageImg} />
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>Our Services</h3>
                        <h4>We provide assistance in various directions</h4>
                        <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga exercitationem dolores in dolorum ducimus recusandae modi vel libero facere a. Dignissimos sed minus dicta eaque veritatis nisi, tempore iure odio sunt itaque sint molestias voluptatum illo ducimus obcaecati velit, voluptatibus labore quas doloremque quae reiciendis corporis iste? Laudantium, ullam minus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga exercitationem dolores in dolorum ducimus recusandae modi vel libero facere a. Dignissimos sed minus dicta eaque veritatis nisi, tempore iure odio sunt itaque sint molestias voluptatum illo ducimus obcaecati velit, voluptatibus labore quas doloremque quae reiciendis corporis iste? Laudantium, ullam minus!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga exercitationem dolores in dolorum ducimus recusandae modi</p>
                    </Col>
                </Row>
            </Container>
            <WhyChoseUs></WhyChoseUs>
        </div>
    );
};

export default Services;