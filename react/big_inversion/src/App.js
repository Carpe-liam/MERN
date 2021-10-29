import React from 'react'
import './App.css';
import PersonCard from './Components/PersonComponent';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 999 } hairColor="Brown" /> 
      <PersonCard firstName="Bob" lastName="Sackett" age={ 45 } hairColor="Brown" /> 
      <PersonCard firstName="James" lastName="Bond" age={ 32} hairColor="Blonde" /> 
      <PersonCard firstName="Tom" lastName="Sawyer" age={ 12 } hairColor="Black" /> 


    </div>
  );
}

export default App;
