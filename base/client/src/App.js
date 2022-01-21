import React from 'react'
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='m-3'>

        <nav>
          <h1>Favorite Authors</h1>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Link to="">X___X</Link>
            <X___X />
          </Route>

        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
