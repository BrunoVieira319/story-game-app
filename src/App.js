import React from 'react';
import Login from './Login'
import NewUser from './NewUser'
import LoginContainer from './containers/LoginContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/newUser" component={NewUser} />

        <LoginContainer.Provider>
          <Route path="/" exact={true} component={Login} />
        </LoginContainer.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
