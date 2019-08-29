import React from 'react'
import LoginContainer from './containers/LoginContainer'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'

const Login = () => {

    const login = LoginContainer.useContainer();

    return (
        <Container>
            <Row style={{ marginTop: "250px" }}>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group controlId="formUser">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;