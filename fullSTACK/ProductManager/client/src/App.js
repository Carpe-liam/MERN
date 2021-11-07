import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Main from './Views/Main';
import ProductDetail from './Components/ProductDetails';
import Update from './Views/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/api/products/">
            <Main />
          </Route>
          <Route exact path="/api/:id">
            <ProductDetail />
          </Route>
          <Route exact path="/api/products/:id/edit">
            <Update />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
    
export default App;