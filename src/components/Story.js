import React from "react"
import {Container, Col, Row, Card, Modal, Button, InputGroup, FormControl} from "react-bootstrap"
import {StoryContext, StoryProvider} from "../contexts/StoryContext"
import AddImg from "../images/add-circle-green-512.png"

const Story = () => (
    <StoryProvider>
        <StoryContext.Consumer>
            {story =>
                <Container style={{'marginTop': '30px'}}>
                    <Row>
                        <Col sm={3}>
                            <Card bg="success" text="white" onClick={story.handleModal}>
                                <Card.Img style={{height: '150px', objectFit: 'contain'}}
                                          variant="top"
                                          src={AddImg} />
                                <Card.Body>
                                    <Card.Text>Add Act</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {story.acts.map((act, i) =>
                            <Col sm={3} key={i}>
                                <Card bg="info" text="white">
                                    <Card.Img style={{height: '150px', objectFit: 'cover'}}
                                              variant="top"
                                              src={act.cover} />
                                    <Card.Body>
                                        <Card.Text>{act.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}

                        <Modal
                            show={story.showModal}
                            onHide={story.handleModal}
                            size="lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Add Act</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Description</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl as="textarea" style={{'height': '125px'}} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Cover</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl />
                                </InputGroup>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={story.handleModal}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={story.handleModal}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Row>
                </Container>
            }
        </StoryContext.Consumer>
    </StoryProvider>
);

export default Story;

