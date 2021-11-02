import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
// ==== COMPONENT IMPORTS ====
import Home from './Components/Home';
import Text from './Components/Text'
import ColoredWord from './Components/ColoredWord';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/:text">
          <Text />
        </Route>
        <Route exact path="/:word/:text/:back">
          <ColoredWord />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
