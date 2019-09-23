import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import Workspace from "./Workspace"
import NewStory from "./NewStory"

const Home = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Story Game Icon</Navbar.Brand>
                <Nav>
                    <Nav.Link>Home</Nav.Link>

                    <Nav.Link>
                        <Link to="/workspace">
                            Workspace
                        </Link>
                    </Nav.Link>

                    <Nav.Link>Browse</Nav.Link>
                    <Nav.Link>
                        <Link to="/newStory">
                            Create Story
                        </Link>
                    </Nav.Link>

                </Nav>
            </Navbar>

            <Route path="/workspace" component={Workspace}/>
            <Route path="/newStory" component={NewStory}/>

            {/*<Route exact path="/home" component={}/>*/}
        </Router>
    )
};

export default Home