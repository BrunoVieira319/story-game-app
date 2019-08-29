import React from 'react';
import Login from './Login'
import LoginContainer from './containers/LoginContainer'

function App() {
  return (
    <LoginContainer.Provider>
      <Login />
    </LoginContainer.Provider>
  );
}

export default App;
