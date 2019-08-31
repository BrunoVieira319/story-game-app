import React from 'react'
import { Form, Button, Col, Container, Row } from 'react-bootstrap'

const NewUser = () => {
    return (
        <Container>
            <Row style={{ marginTop: "250px" }}>
                <Col md={{ span: 6, offset: 3 }}>
                    <Form>
                        <Form.Group controlId="formUser">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter username" />
                        </Form.Group>
                        
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
            </Row>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default NewUser;