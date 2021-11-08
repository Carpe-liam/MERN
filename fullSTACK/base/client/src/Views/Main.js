import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ThingForm from '../Components/ThingForm'
import ThingList from '../Components/ThingList'

const Main = () => {
    const [things, setThings] = useState([])
    const [domChange, setDomChange] = useState(false)

    const changeDom = () => {
        setDomChange(!domChange)
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/api/things')
            .then(response => {
                setThings(response.data)
            })
            .catch(err => console.log(err))
    }, [domChange])

    console.log(things)

    return(
        <div className="pt-5">
            <ThingForm changeDom={changeDom}/>
                <hr/>
            <ThingList things={things}/>
        </div>
    )
}

export default Main