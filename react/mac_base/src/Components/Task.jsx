import React from 'react'
// ========= IMPORTS ==========
import {useState} from 'react'

//===== START OF COMPONENT
const Task = () => {

// ======== VARIABLES =========
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])

// ======== FUNCTIONS || HANDLERS ==========

// === Handler For New Todo ===
    const handleNewTodoSubmit = (e) => {
        e.preventDefault();
        
        //ensure there's no empty functions without the need for error messages
        if(newTodo.length === 0) return; 
        //setting value of each task in the array
        const newTask = {
            task: newTodo, complete: false
        }
        // adding new todo to the end of the array
        setTodos([...todos, newTask])
        // reset the input box to empty as it's value is tied to {newTodo}
        setNewTodo("")
    }



// ======== DISPLAY OUT ========
    return (
        <div className="">

        </div>
    )
}

export default Task