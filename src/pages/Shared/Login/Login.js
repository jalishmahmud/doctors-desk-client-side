
import useAuth from '../../../hooks/useAuth';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    // distructure from useAuth
    const {
        signInUsingGoogle,
        error,
        isChecked,
        setIsLoading,
        getUserEmail,
        getUserPassword,
        registerUsingEmailPassword,
        signInUsingEmailPassword,
        handleSignInSignUpToggle
    } = useAuth();

    // redirect to specific page after login
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/appointment';
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    return (
        <div>
            <Container>
                <Row xs={1} md={3} className="mt-3 pt-5 p-4">
                    <Col xs={1}></Col>
                    <Col className="border border-danger rounded p-4 ">
                        <h3 classNasme="border-bottom pb-3 mb-3">{isChecked ? 'Register' : 'Log in'}</h3>
                        <Form onSubmit={isChecked ? registerUsingEmailPassword : signInUsingEmailPassword
                        }>
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
                        <Button onClick={handleGoogleSignIn} variant="danger">Google Sign In</Button>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;