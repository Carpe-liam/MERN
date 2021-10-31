<<<<<<< HEAD
import React, { useState } from 'react'

const Tabs = (props) => {

    const [tabArr, setTabArr] = useState([])

    

    return (
        <div className="container d-flex justify-center text-center mt-3">
            <div>
                <button className="btn bg-blue-200 hover:bg-blue-500 mx-3 border-2 px-3 py-1 border-black"
                onClick={() => alert('Hello There')}
                > Tab 1</button>
            </div>
            <div>
                <button className="btn bg-blue-200 hover:bg-blue-500 mx-3 border-2 px-3 py-1 border-black"
                > Tab 2</button>
            </div>
            <div>
                <button className="btn bg-blue-200 hover:bg-blue-500 mx-3 border-2 px-3 py-1 border-black"
                > Tab 3</button>
=======
import React from 'react'
// ========= IMPORTS ==========
import {useState} from 'react'

const Tabs = (props) => {
// ======== VARIABLES =========
    const tabsArr = [{Tab1: "Tab-1 content"}, {Tab2: "Tab-2 content"}, {Tab3: "Tab-3 content"}]
    const [tab, setTab] = useState("tabsets")

    

// ======== FUNCTIONS ==========

    // +++ HANDLERS +++
        const tabHandler = (e) => {
            e.preventDefault();


            console.log(e.target.id)
            // ==== objectception ====
            setTab(tabsArr[e.target.id][Object.keys(tabsArr[e.target.id])])
        }



// ======== DISPLAY OUT ========
    return (
        <div className="border-2 border-black h-48 m-5">
            <div className="d-flex justify-content-center mt-4 text-green-300">
                {       tabsArr.map(  (tab, index) =>
                        <button className="btn btn-primary mx-3 mt-3 px-4" key={index} id={index}
                        onClick={ tabHandler }
                        > {Object.keys(tab)} </button> )
                }
            </div>
            <div className="text-center mt-4 text-green-300">
                <p>{tab}</p>
>>>>>>> 8f1c7d6f6d46cd29f03b9e2d91369f4716d3d8ee
            </div>
        </div>
    )
}

export default Tabs
