import React from 'react'
import {Redirect} from 'react-router-dom'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import NewStoryContainer from '../containers/NewStoryContainer'
import provide from '../ContainerProvider'

const NewStory = () => {
    const newStory = NewStoryContainer.useContainer();

    if(newStory.saved) {
        return <Redirect to="/workspace"/>
    }
    return (
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
};

export default provide(NewStoryContainer, NewStory)