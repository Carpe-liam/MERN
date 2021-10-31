import React from 'react'
// ========= IMPORTS ==========
import {useState} from 'react'

let tasks = []
const Task = () => {

// ======== VARIABLES =========
    const [task, setTask] = useState("")
    const [taskError, setTaskError] = useState("")
// ======== FUNCTIONS ==========

    // +++ HANDLERS +++
    const tasksNewHandler = (e) => {
        e.preventDefault()

        tasks.push({task})

        console.log("Submitted")
        console.log(tasks)
        
    }

    const handleTask = (e) => {
        e.preventDefault()

        setTask(e.target.value)
        if(e.target.value.length < 1) {
            setTaskError("Must enter task!")
        } else {
            setTaskError("")
        }
    }



// ======== DISPLAY OUT ========
    return (
        <div className="">
            <form className="w-56" onSubmit={ tasksNewHandler }>
                <p className="">Enter Task: </p>
                <input type="text" className="border-dark border-2 rounded my-1 px-2 bg-gray-300" onChange={ handleTask } />
                    {
                    taskError ?
                    <p style={{color:'red'}}>{ taskError }</p>: ''
                    }
                <button className="btn bg-indigo-400 mt-2" >Submit</button>
            </form>
            <div>
                <h1>{task}</h1>
            </div>
        </div>
    )
}

export default Task
