import React from 'react'
import {
  BrowserRouter,
  Switch,
  History,
  Route
} from 'react-router-dom'
// ===== IMPORT COMPONENTS =====
import APIForm from './Components/APIForm';
import Render from './Components/Render';

function App() {
  return (
    <BrowserRouter>
      <div>
        <APIForm />
        <Switch>
          <Route exact path="/:category/:number">
            <Render />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;