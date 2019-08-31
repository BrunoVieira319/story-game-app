import React from 'react'
import containerProvider from '../ContainerProvider'
import NewUserContainer from '../containers/NewUserContainer'
import {Form, Button, Col, Container, Row} from 'react-bootstrap'

const NewUser = () => {
    const newUser = NewUserContainer.useContainer();
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
                                value={newUser.username}
                                onChange={newUser.handleUsername}/>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={newUser.password}
                                onChange={newUser.handlePassword}/>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={newUser.confirmedPassword}
                                onChange={newUser.handleConfirmedPassword}/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={{span: 6, offset: 3}}>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default containerProvider(NewUserContainer, NewUser)