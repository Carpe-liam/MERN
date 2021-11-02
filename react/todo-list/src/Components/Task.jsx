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

        const newTask = {
            task: newTodo,
            complete: false
        }

        // adding new todo to the end of the array
        setTodos([...todos, newTask])
        // reset the input box to empty as it's value is tied to {newTodo}
        setNewTodo("")
    }
    
// === Handler For Todo Delete ===
    const handleTodoDelete = (delIndex) => {
        const filterTodos = todos.filter((todo, index) => {
            return index !== delIndex
        })
        setTodos(filterTodos)
    }

    const handleComplete = (index) => {
        const updatedTodos = todos.map( (todo, idx) => {
            if (index === idx) {
                todo.complete = !todo.complete;
            }
        return todo;
        } );

        setTodos(updatedTodos);
    }


// ======== DISPLAY OUT ========
    return (
        <div className="p-4 bg-blue-800 h-96 text-yellow-200 align-bottom ">
            <form className="w-56" onSubmit={ handleNewTodoSubmit }>
                <input className="border-dark border-2 rounded my-1 px-2 bg-gray-600" type="text"
                onChange={ (e) => { setNewTodo(e.target.value)} } value={ newTodo }/>
                <button className="btn bg-green-400 mt-2" >Add Task</button>
            </form>
            <div className="my-3 align-bottom">
                {todos.map( (todo, index) => {
                    const taskStyles= []

                    if( todo.complete === true) {
                        taskStyles.push("strike")
                    }

                    return(
                        <div key={index}>
                            <button className="btn bg-red-400 hover:bg-red-600 my-3 me-4"
                            onClick={ (e) => { handleTodoDelete(index) } } >
                            Delete</button>

                            <input type="checkbox" checked={ todo.complete } onChange={ (e) => {handleComplete(index) } }/>

                            <span className={taskStyles.join(" ")}> {todo.task} </span>
                        </div>
                    )
                } ) }
            </div>
        </div>
    )
}

export default Task