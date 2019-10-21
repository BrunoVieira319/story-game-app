import React from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Button, Col, Container, Row, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {LoginContext} from "../contexts/LoginContext"
import Cover from "../images/Elta_A.png"

const Login = () => {
    return (
        <LoginContext.Consumer>
            {login =>
                login.redirect ? (
                    <Redirect to="/home"/>
                ) : (
                    <Container>
                        <Image src={Cover} fluid style={{background: 'powderblue'}}/>
                        <Row style={{position: 'absolute',
                            width: '50%',
                            top: '250px'}}>
                            <Col md={{span: 6, offset: 3}}>
                                <Form>
                                    <Form.Group controlId="formUser">
                                        <Form.Label style={{color:'white', fontWeight:'bold'}}>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter username"
                                            value={login.username}
                                            onChange={login.handleUsername}/>
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label style={{color:'white', fontWeight:'bold'}}>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={login.password}
                                            onChange={login.handlePassword}/>
                                    </Form.Group>
                                </Form>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={login.sendCredentials}>
                                    Sign In
                                </Button>
                                <br/>
                                <Link to="/newUser">
                                    I don't have an account
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        </LoginContext.Consumer>
    )
};

export default Login