import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
// ===== IMPORT COMPONENTS =====
import APIForm from './Components/APIForm';


function App() {
  return (
    <div>
      <BrowserRouter>
        <APIForm></APIForm>
        <Render />  
      </BrowserRouter>
    </div>
  );
}

export default App;
