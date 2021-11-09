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

function App() {
  return (
    <BrowserRouter>
      <div className='m-3'>
        <nav>
          <h1>Favorite Authors</h1>
        </nav>
        <Switch>
          <Route exact path='/authors/new'>
            <Link to="/authors">Home</Link>
            <AuthorForm />
          </Route>

          <Route exact path='/authors'>
            <Link to="/authors/new">Add Author</Link>
            <Main />
          </Route>

          <Route exact path='/authors/:id/edit'>
            <Link to="/authors">Home</Link>
            <UpdateAuthor />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
