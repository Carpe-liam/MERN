import React, { useState } from 'react'


const Generator = () => {
    
    const [colors, setColors] = useState([])

    const [color, setColor] = useState("")


    const createColor = (e) => {
        e.preventDefault()

        const newColor = { color }
        setColors(...colors, newColor.color)
        setColor("")

        console.log(newColor)
        console.log(colors)
    }

    const box = {
    }
    const boxStyle = {
        marginTop: '30px',
        marginLeft: '15px',
        marginRight: '15px',
        height: '100px',
        width: '100px',
        border:' black solid 1px',
        borderRadius: '5px',
        verticalAlign: 'middle',
        background: color
    }


    return (
        <div>
            <form onSubmit={ createColor }>
                <label> Color </label>
                <input id="enter" type="text"  onChange={ (e) => setColor(e.target.value)} value={color} />
                <input id='button' type="submit" value="Add Box" />
            </form>
            <div id="boxes">
                { colors.map( (color, keyId)  =>
                <div key={keyId}> <p style={boxStyle}>{color}</p> </div> 
                ) }
            </div>
        </div>
    )
}

export default Generator;

