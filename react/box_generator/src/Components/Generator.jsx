import React, { useState } from 'react'


const Generator = () => {
    
    const [color, setColor] = useState("")
    const [lens, setLens] = useState([])
    
    
    // const [len, setLen] = useState()
    const [colors, setColors] = useState([])
    const createColor = (e) => {
        e.preventDefault()

        const newColor = { color }
        setColors([...colors, color])
        // reset textbox
        setColor("")

        console.log("NewColor: " + newColor.color)
        console.log(colors)
        console.log(lens)
    }


    const boxStyle = {
        marginTop: '30px',
        marginLeft: '15px',
        marginRight: '15px',
        height: '100px',
        width: '100px',
        border:' black solid 1px',
        borderRadius: '5px',
        verticalAlign: 'middle'
    }


    return (
        <div>
            <form onSubmit={ createColor }>
                <label> Color: </label>
                <input id="enter" type="text"  onChange={ (e) => setColor(e.target.value)} value={color} />
                <input id='button' type="submit" value="Add Box" />
            </form>
            <div id="boxes">
                { colors.map( (color, colorsIndex)  =>
                <div key={colorsIndex}> <p style={{...boxStyle, backgroundColor: color}}>{color}</p> </div> 
                ) }
            </div>
        </div>
    )
}

export default Generator;