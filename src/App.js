import React from 'react'
import Login from './components/Login'
import NewUser from './components/NewUser'
import Home from './components/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {LoginProvider} from "./contexts/LoginContext"

function App() {
    return (
        <LoginProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login}/>
                    <Route path="/newUser" component={NewUser}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </BrowserRouter>
        </LoginProvider>
    )
}

export default App
