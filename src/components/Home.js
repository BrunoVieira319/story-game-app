import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const Home = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Story Game Icon</Navbar.Brand>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Workspace</Nav.Link>
                    <Nav.Link>Browse</Nav.Link>
                </Nav>
            </Navbar>

            {/*<Route exact path="/home" component={}/>*/}
        </Router>
    )
};

export default Home