import React from 'react'
import LoginContainer from '../containers/LoginContainer'
import containerProvider from '../ContainerProvider'
import {Form, Button, Col, Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Login = () => {
    const login = LoginContainer.useContainer();
    return (
        <Container>
            <Row style={{marginTop: "250px"}}>
                <Col md={{span: 6, offset: 3}}>
                    <Form>
                        <Form.Group controlId="formUser">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                onChange={login.handleName}
                                value={login.name}/>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={login.password}
                                onChange={login.handlePassword}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 6, offset: 6}}>
                    <Link to="/newUser">
                        I don't have an account
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default containerProvider(LoginContainer, Login)