import React from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Col, Container, Row, Image, Alert} from 'react-bootstrap'
import ResetLink from './ResetLink'
import {LoginContext} from "../contexts/LoginContext"
import Cover from "../images/Elta_A.png"

const coverImageStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#deefff',
    maxWidth: '100%',
    height: 'auto'
};

const formRowStyle = {
    marginTop: window.innerWidth < 768 ? '50px' : '200px'
};

const Login = () => {
    return (
        <LoginContext.Consumer>
            {login =>
                login.redirect ? (
                    <Redirect to="/home"/>
                ) : (
                    <Container>
                        <Image src={Cover} style={coverImageStyle}/>
                        <Row style={formRowStyle}>
                            <Col md={{span: 4, offset: 4}}>
                                <Form>
                                    <Form.Group controlId="formUser">
                                        <Form.Label style={{color: 'white', fontWeight: 'bold'}}>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter username"
                                            value={login.username}
                                            onChange={login.handleUsername}/>
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label style={{color: 'white', fontWeight: 'bold'}}>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={login.password}
                                            onChange={login.handlePassword}/>
                                    </Form.Group>
                                </Form>
                                <Alert variant="success"
                                       onClick={login.sendCredentials}
                                       style={{cursor: 'pointer', marginTop: '30px'}}
                                >
                                    Sign In
                                </Alert>
                                <ResetLink to="/newUser" style={{color: 'black'}}>
                                    <Alert variant="dark">
                                        I don't have an account
                                    </Alert>
                                </ResetLink>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </LoginContext.Consumer>
    )
};

export default Login