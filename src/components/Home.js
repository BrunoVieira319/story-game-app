import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Link from "./ResetLink"
import {Navbar, Nav} from 'react-bootstrap'
import {GiSpellBook} from 'react-icons/gi'
import Workspace from "./Workspace"
import Browse from "./Browse"
import NewStory from "./NewStory"
import Story from "./Story"
import Act from "./Act"
import Player from "./Player"

const navItems = [
    {header: "Workspace", link: "/workspace"},
    {header: "Create Story", link: "/newStory"},
    {header: "Browse", link: "/browse"}
];

const Home = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" style={{marginBottom: '20px'}}>
                <Navbar.Brand>
                    <Link to="/home">
                        <GiSpellBook size={50}/>
                    </Link>
                </Navbar.Brand>
                <Nav>
                    {
                        navItems.map((item, i) => (
                            <Nav.Item key={i} style={{paddingLeft: '20px', paddingRight: '20px'}}>
                                <Link to={item.link}>
                                    {item.header}
                                </Link>
                            </Nav.Item>
                        ))
                    }
                </Nav>
            </Navbar>

            <Route path="/workspace" component={Workspace}/>
            <Route path="/newStory" component={NewStory}/>
            <Route path="/browse" component={Browse}/>
            <Route path="/story/:storyId" component={Story}/>
            <Route path="/act/:actId" component={Act}/>
            <Route path="/play/:storyId" component={Player}/>

        </Router>
    )
};

export default Home