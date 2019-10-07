import React from 'react'
import {Container, Col, Row, CardDeck, CardGroup, Card} from "react-bootstrap"
import {WorkspaceContext, WorkspaceProvider} from "../contexts/WorkspaceContext";
import AddImg from '../images/add-circle-green-512.png'

const Workspace = () => {
    return (
        <WorkspaceProvider>
            <WorkspaceContext.Consumer>
                {workspace =>
                    <Container style={{'marginTop': '30px'}}>
                        <Row>
                            {
                                workspace.stories.map((i, story) =>
                                    <Col sm={4} key={i}>
                                        <Card text="white">
                                            <Card.Img style={{height: '200px', objectFit: 'contain'}}
                                                      variant="top"
                                                      src={story.cover}/>
                                        </Card>
                                    </Col>
                                )
                            }

                        </Row>
                    </Container>
                }
            </WorkspaceContext.Consumer>
        </WorkspaceProvider>
    )
};

export default Workspace