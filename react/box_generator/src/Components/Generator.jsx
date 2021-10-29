import React from 'react'

const Generator = () => {
    return (
        <div>
            <label> Color </label>
            <input id="enter" type="text" />
            <input id='button' type="submit" value="Create Box" />
            <div id="boxes">
                <div id="box">Box</div>
            </div>
        </div>
    )
}

export default Generator;