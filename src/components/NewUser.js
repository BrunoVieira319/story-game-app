import React from 'react'
import {Redirect} from 'react-router-dom'
import provide from '../ContainerProvider'
import NewUserContainer from '../containers/NewUserContainer'
import {Form, Button, Col, Container, Row} from 'react-bootstrap'

const NewUser = () => {
    const newUser = NewUserContainer.useContainer();

    if (newUser.redirect) {
        return <Redirect to="/home"/>
    }

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
                                onChange={newUser.handleUsername}
                                isInvalid={newUser.messageInvalidUsername !== ""}/>
                            <Form.Control.Feedback type="invalid">
                                {newUser.messageInvalidUsername}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={newUser.password}
                                onChange={newUser.handlePassword}
                                isInvalid={newUser.messageInvalidPassword !== ""}/>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={newUser.confirmedPassword}
                                onChange={newUser.handleConfirmedPassword}
                                isInvalid={newUser.messageInvalidPassword !== ""}/>
                            <Form.Control.Feedback type="invalid">
                                {newUser.messageInvalidPassword}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={newUser.saveUser}>
                        Sign Up
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default provide(NewUserContainer, NewUser)