import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import {GiSpellBook} from 'react-icons/gi'
import Workspace from "./Workspace"
import NewStory from "./NewStory"
import Story from "./Story"
import Act from "./Act"

const Home = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" style={{'marginBottom': '20px'}}>
                <Navbar.Brand>
                    <Link to="/home">
                        <GiSpellBook size={40}/>
                    </Link>
                </Navbar.Brand>
                <Nav>

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
            <Route path="/story/:id" component={Story}/>
            <Route path="/act/:actId" component={Act}/>

            {/*<Route exact path="/home" component={}/>*/}
        </Router>
    )
};

export default Home