import React from "react"
import {ActProvider, ActContext} from "../contexts/ActContext"
import {Container, Alert, Row, Col, Card, Table} from "react-bootstrap"
import {FaPlusCircle} from "react-icons/fa"
import AddChoiceModal from "./AddChoiceModal"

const Act = () => (
    <ActProvider>
        <ActContext.Consumer>
            {actContext =>
                <Container>
                    <Row>
                        <Col md="5">
                            <Card>
                                <Card.Img style={{height: '150px', objectFit: 'cover'}}
                                          src={actContext.act.cover}/>
                                <Card.Body>
                                    <Card.Title>{actContext.act.title}</Card.Title>
                                    <Card.Text>{actContext.act.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="7">
                            <Alert variant="success"
                                   style={{textAlign: 'center', cursor: 'pointer'}}
                                   onClick={actContext.handleModal}>
                                Add a choice to this scene <FaPlusCircle/>
                            </Alert>

                            <Table striped bordered hover>
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
                                    ))
                                }

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