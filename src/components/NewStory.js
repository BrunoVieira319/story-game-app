import React from 'react'
import {Redirect} from 'react-router-dom'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import {NewStoryContext, NewStoryProvider} from '../contexts/NewStoryContext'

const NewStory = () => {
    return (
        <NewStoryProvider>
            <NewStoryContext.Consumer>
                {newStory =>
                    newStory.redirect ? (
                        <Redirect to="/workspace"/>
                    ) : (
                        <Container>
                            <Row style={{marginTop: "25px"}}>
                                <Col md={{span: 6, offset: 3}}>

                                    <Form>
                                        <Form.Group controlId="formStory">
                                            <Form.Label>Story Title</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter story title"
                                                value={newStory.title}
                                                onChange={newStory.handleTitle}/>

                                            <Form.Label>Banner</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter a link image"
                                                value={newStory.cover}
                                                onChange={newStory.handleCover}/>

                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                value={newStory.description}
                                                onChange={newStory.handleDescription}/>
                                        </Form.Group>
                                    </Form>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        onClick={newStory.saveNewStory}
                                    >
                                        Create Story
                                    </Button>

                                </Col>
                            </Row>
                        </Container>
                    )
                }
            </NewStoryContext.Consumer>
        </NewStoryProvider>
    )
};

export default NewStory