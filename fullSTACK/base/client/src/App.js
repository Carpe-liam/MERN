import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route, 
  Link
} from 'react-router-dom'
import './App.css';

import Main from './Views/Main';
import ThingDetails from './Views/ThingDetails';
import UpdateThing from './Views/Update';

function App() {
  return (
    <BrowserRouter>
    <div className="text-center bg-gray-600 text-light p-10">
      <nav className="d-flex justify-content-around text-center" >
        <Link to='/api/things' className="text-light btn bg-red-400 mt-2">Home</Link>
      </nav>
      <Switch>
        <Route exact path="/api/things">
          <Main />
        </Route>
        
        <Route exact path="/api/things/:id">
          <ThingDetails />
        </Route>

        <Route exact path="/api/things/:id/edit">
          <UpdateThing />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
