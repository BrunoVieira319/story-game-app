import React from "react"
import {PlayerProvider, PlayerContext} from "../contexts/PlayerContext";
import {Container, Alert, Col, Jumbotron, Card} from "react-bootstrap";
import styled, {keyframes} from 'styled-components';
import {fadeIn, fadeOut} from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

const cardStyle = {
    background: '#3b4550',
    marginBottom: '15px'
};

const jumbotronStyle = {
    background: '#132538',
    borderRadius: '.15rem',
    paddingRight: '0',
    paddingLeft: '0'
};

const Player = () => (
    <PlayerProvider>
        <PlayerContext.Consumer>
            {player =>
                <Container>
                    <FadeDiv>
                        <Jumbotron style={jumbotronStyle}>
                            <Col md={{span: 8, offset: 2}}>

                                <h1 style={{color: '#d9e3ee'}}>
                                    {player.currentAct.title}
                                </h1>

                                <Card style={cardStyle}>
                                    <Card.Img style={{maxHeight: '350px', objectFit: 'cover'}}
                                              src={player.currentAct.cover}/>
                                    <Card.Body>
                                        <Card.Text>
                                            {player.currentAct.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                {
                                    player.currentAct.choices !== undefined &&
                                    player.currentAct.choices.map((choice, i) => (
                                        <Alert variant="info"
                                               key={i}
                                               onClick={() => {player.goToAct(choice.actId)}}
                                               style={{cursor: 'pointer'}}
                                        >
                                            {choice.description}
                                        </Alert>
                                    ))
                                }
                            </Col>
                        </Jumbotron>
                    </FadeDiv>
                </Container>
            }
        </PlayerContext.Consumer>
    </PlayerProvider>
);

export default Player