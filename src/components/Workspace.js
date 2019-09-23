import React from 'react'
import {Container, Col, Row, CardDeck, CardGroup, Card} from "react-bootstrap"
import AddImg from '../images/add-circle-green-512.png'

const Workspace = () => {
    return (
        <Container style={{'marginTop': '30px'}}>
            <Row>
                <Col sm={4}>
                    <Card text="white">
                        <Card.Img style={{height: '200px', objectFit: 'contain'}}
                                  variant="top"
                                  src={AddImg}/>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Workspace