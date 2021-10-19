
import useAuth from '../../../hooks/useAuth';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Login = () => {
    const {
        signInUsingGoogle,
        error,
        isChecked,
        getUserName,
        getUserEmail,
        getUserPassword,
        registerUsingEmailPassword,
        signInUsingEmailPassword,
        handleSignInSignUpToggle
    } = useAuth();

    return (
        <div>
            <Container>
                <Row className="mt-3 pt-5">
                    <Col></Col>
                    <Col className="border border-danger rounded p-4 ">
                        <h3 className="border-bottom pb-3 mb-3">{isChecked ? 'Register' : 'Log in'}</h3>
                        <Form onSubmit={isChecked ? registerUsingEmailPassword : signInUsingEmailPassword
                        }>
                            {isChecked &&
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control onBlur={getUserName} type="name" placeholder="Enter name" />
                                </Form.Group>}

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={getUserEmail} type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={getUserPassword} type="password" placeholder="Password" />
                            </Form.Group>
                            <p className="text-danger">{error && error}</p>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onClick={handleSignInSignUpToggle} type="checkbox" label="I am new user" />
                            </Form.Group>
                            {isChecked ?
                                <Button variant="primary" type="submit">
                                    Register
                                </Button> :
                                <Button variant="primary" type="submit">
                                    login
                                </Button>
                            }
                        </Form>
                        <div>-------------or-----------</div>
                        <Button onClick={signInUsingGoogle} variant="danger">Google Sign In</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>




        </div>
    );
};

export default Login;