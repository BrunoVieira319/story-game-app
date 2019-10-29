import React from "react"
import {ActProvider, ActContext} from "../contexts/ActContext"
import {Container, Alert, Row, Col, Card, Table} from "react-bootstrap"
import {FaPlusCircle} from "react-icons/fa"
import {GiPlayButton} from "react-icons/gi"
import AddChoiceModal from "./AddChoiceModal"

const ActCard = props => (
    <Card bg={props.color} text="white">
        <Card.Img style={{height: '150px', objectFit: 'cover'}}
                  src={props.act.cover}/>
        <Card.Body>
            <Card.Title>{props.act.title}</Card.Title>
            <Card.Text>{props.act.description}</Card.Text>
        </Card.Body>
    </Card>
);

const Act = () => (
    <ActProvider>
        <ActContext.Consumer>
            {actContext =>
                <Container>
                    <Row>
                        <Col md="5">
                            {actContext.act.intro ? (
                                <ActCard color="info" act={actContext.act}/>
                            ) : (
                                <ActCard color="dark" act={actContext.act}/>
                            )}
                            <Alert variant="info"
                                   style={{textAlign: 'center', cursor: 'pointer', marginTop: '15px'}}
                                   onClick={actContext.setIntro}>
                                Set this scene as introduction <GiPlayButton/>
                            </Alert>
                        </Col>
                        <Col md="7">
                            <Alert variant="success"
                                   style={{textAlign: 'center', cursor: 'pointer'}}
                                   onClick={actContext.handleModal}>
                                Add a choice to this scene <FaPlusCircle/>
                            </Alert>

                            <Table striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    <th>Choice</th>
                                    <th>Leads To</th>
                                </tr>
                                </thead>
                                <tbody>
                                {actContext.act.choices !== undefined &&
                                actContext.act.choices.map((choice, i) => (
                                    <tr key={i}>
                                        <td>{choice.description}</td>
                                        <td>{choice.toAct}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Col>

                        <AddChoiceModal context={actContext}/>
                    </Row>
                </Container>
            }
        </ActContext.Consumer>
    </ActProvider>
);

export default Act