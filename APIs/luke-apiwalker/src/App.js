import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
// ===== IMPORT COMPONENTS =====
import Home from './Components/Home';


function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
