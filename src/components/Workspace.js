import React from 'react'
import {Container, Col, Row, Card} from "react-bootstrap"
import {Link} from 'react-router-dom'
import {WorkspaceContext, WorkspaceProvider} from "../contexts/WorkspaceContext";

const Workspace = () => {
    return (
        <WorkspaceProvider>
            <WorkspaceContext.Consumer>
                {workspace =>
                    <Container>
                        <Row>
                            {workspace.stories.map((story, i) =>
                                <Col sm={4} key={i}>
                                    <Card bg="dark" text="white">
                                        <Link to={`/story/${story.id}`}>
                                            <Card.Img style={{height: '200px', objectFit: 'cover'}}
                                                      variant="top"
                                                      src={story.cover}/>
                                        </Link>
                                        <Card.Body>
                                            <Card.Title>{story.title}</Card.Title>
                                            <Card.Text>{story.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                }
            </WorkspaceContext.Consumer>
        </WorkspaceProvider>
    )
};

export default Workspace