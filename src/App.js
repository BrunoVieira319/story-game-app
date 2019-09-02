import React from 'react'
import Login from './components/Login'
import NewUser from './components/NewUser'
import Home from './components/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login}/>
                <Route path="/newUser" component={NewUser}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
