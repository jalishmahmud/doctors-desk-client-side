import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Doctor = ({ doctor }) => {
    const { id, name, img, designation } = doctor;
    const history = useHistory();
    const handleAppointmentButton = () => {
        history.push(`/doctor/${id}`)
    }
    return (
        <Col className="mb-4" xs={12} md={4}>
            <img className="img-fluid rounded doctor-image" src={img} alt="" />
            <div className="doctor-info">
                <Button onClick={handleAppointmentButton} className="book-button" variant="danger">Show Detail</Button>
                <h4>{name}</h4>
                <p>{designation}</p>
            </div>
        </Col>
    );
};

export default Doctor;