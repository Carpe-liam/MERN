import React from 'react'
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import AuthorForm from './Components/AuthorForm';
import Main from './Views/Main';
import UpdateAuthor from './Views/UpdateAuthor';
import Details from './Views/Details';

function App() {
  return (
    <BrowserRouter>
      <div className='m-3'>
        <nav>
          <h1>Favorite Authors</h1>
        </nav>
        <Switch>
          <Route exact path='/authors/new'>
            <Link to="/authors" className="btn btn-primary">Home</Link>
            <AuthorForm />
          </Route>

          <Route exact path='/authors'>
            <Link to="/authors/new" className="btn btn-primary">Add Author</Link>
            <Main />
          </Route>

          <Route exact path='/authors/:id'>
            <Link to="/authors" className="btn btn-primary">Home</Link>
            <Details />
          </Route>

          <Route exact path='/authors/:id/edit'>
            <Link to="/authors" className="btn btn-primary">Home</Link>
            <UpdateAuthor />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
