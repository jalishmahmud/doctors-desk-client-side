import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div className="single-doctor text-center mt-5">
            <div className="mb-5">
                <h5 className="mb-3">MEDICAL SPECIALISTS</h5>
                <h2>We have the best specialists of the country</h2>
            </div>

            <Container>
                <Row classNam="g-5">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;