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
            </div>
        </div>
    )
}

export default Tabs
