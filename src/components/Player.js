import React from "react"
import {PlayerProvider, PlayerContext} from "../contexts/PlayerContext";
import {Container, Alert, Col, Jumbotron, Card} from "react-bootstrap";
import styled, {keyframes} from 'styled-components';
import {fadeIn, fadeOut} from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

const Player = () => (
    <PlayerProvider>
        <PlayerContext.Consumer>
            {player =>
                <Container>
                    <FadeDiv>
                        <Jumbotron fluid>
                            <Col md={{span: 8, offset: 2}}>
                                <Card style={{marginBottom: '15px'}}>
                                    <Card.Img src={player.currentAct.cover}/>
                                    <Card.Body>
                                        <Card.Text>
                                            {player.currentAct.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                {
                                    player.currentAct.choices !== undefined &&
                                    player.currentAct.choices.map((choice, i) => (
                                        <Alert variant="primary"
                                               key={i}
                                               onClick={() => {
                                                   player.goToAct(choice.actId)}}
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