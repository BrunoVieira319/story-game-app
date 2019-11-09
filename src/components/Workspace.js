import React from 'react'
import ResetLink from "./ResetLink";
import {Container, Col, Row, Card} from "react-bootstrap"
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
                                    <Card bg="dark">
                                        <ResetLink to={`/story/${story.id}`}>
                                            <Card.Img style={{height: '200px', objectFit: 'cover'}}
                                                      variant="top"
                                                      src={story.cover}/>
                                            <Card.Body>
                                                <Card.Title>{story.title}</Card.Title>
                                                <Card.Text>{story.description}</Card.Text>
                                            </Card.Body>
                                        </ResetLink>
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