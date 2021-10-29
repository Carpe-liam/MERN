import React from 'react'
import './App.css';
import PersonComponent from './components/PersonComponent'

const personArr = [
    {"firstName" : "Alex", "lastName" : "Tyler", "age" : "25", "hairColor" : "brown"}
]


function App() {
    return (
        <div className="App">

            <PersonComponent firstName="Alex" lastName="Tyler" aged={25} hairColor="Brown" />



        </div>
    );
}

export default App;
