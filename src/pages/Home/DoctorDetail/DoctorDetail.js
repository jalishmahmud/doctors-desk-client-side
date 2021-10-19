
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch(`/doctor${doctorId}.json`)
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, []);

    const { name, img, designation, hospitalName, degree, workingAddress, visitTime, consultationFee, email, phone } = doctor;

    return (
        <Container>
            <Row className="my-5 ">
                <Col xs={12} md={6}>
                    <img className="img-fluid rounded mb-4" src={img} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <h3 className="mb-3">Name: {name}</h3>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>Designation</td>
                                <td>{designation}</td>
                            </tr>
                            <tr>
                                <td>Degree</td>
                                <td>{degree}</td>
                            </tr>
                            <tr>
                                <td>Fee</td>
                                <td>{consultationFee}</td>
                            </tr>
                            <tr>
                                <td>Visit Time</td>
                                <td>{visitTime}</td>
                            </tr>
                            <tr>
                                <td>Hospital Name</td>
                                <td>{hospitalName}</td>
                            </tr>
                            <tr>
                                <td>Working Address</td>
                                <td>{workingAddress}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{email}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <span className="me-4"><Link to="/appointment"><Button variant="danger">Book Appointment</Button></Link></span>
                    <span><Link to="/home"><Button variant="secondary">Back To Home</Button></Link></span>
                </Col>
            </Row>
        </Container>
    );
};

export default DoctorDetail;