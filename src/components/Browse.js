import React from "react"
import {BrowseProvider, BrowseContext} from "../contexts/BrowseContext"
import {Container, Row, Card} from "react-bootstrap"
import ResetLink from "./ResetLink"

const Browse = () => (
    <BrowseProvider>
        <BrowseContext.Consumer>
            {browse =>
                <Container>
                    {
                        browse.stories.map((story, i) =>
                            <Row key={i}>
                                <ResetLink to={`/play/${story.id}`}>
                                    <Card bg="dark"
                                          style={{
                                              display: 'flex',
                                              flexDirection: 'row',
                                              height: '300px',
                                              marginBottom: '20px'
                                          }}>
                                        <Card.Img src={story.cover} style={{maxWidth: '50%', objectFit: 'cover'}}/>
                                        <Card.Body>
                                            <Card.Title>{story.title}</Card.Title>
                                            <Card.Text>{story.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </ResetLink>
                            </Row>
                        )
                    }
                </Container>
            }
        </BrowseContext.Consumer>
    </BrowseProvider>
);

export default Browse