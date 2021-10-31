import React from 'react'
// ========= IMPORTS ==========
import {useState} from 'react'

const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];

const TestInputs = () => {

// ======== VARIABLES =========
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(false);


// ======== FUNCTIONS ==========

// +++ HANDLERS +++
    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit + ' is' + (isTasty ? '' : ' not') + ' tasty!');
    }

// ======== DISPLAY OUT ========
    return (
        <form onSubmit={handleSubmit}>
            <div className="mx-40 mt-10 w-48">
                <select className="form-select" value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)}>
                    {fruits.map( (fruit, idx) => 
                        <option key={idx} value={fruit}>{fruit}</option>
                        )}
                </select>
            </div>
            <div className="mx-40 mt-10">
                <label className='form-label'>
                    <input className="form-check-input" type="checkbox" checked={isTasty} onChange={e => setIsTasty(e.target.checked)}/> Is it tasty?
                </label>
            </div>
            <div className="mx-40 mt-10">
                <button className="btn bg-yellow-400 hover:bg-yellow-700">Take a bite!</button>
            </div>
        </form>
    )
}

export default TestInputs
