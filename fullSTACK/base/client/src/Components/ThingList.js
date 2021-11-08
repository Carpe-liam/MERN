import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ThingList = (props) => {
    return (
        <div>
            {props.things.map( (thing, index) => 
            <p key={index}>
                {thing.name}
                {"  |  "}
                <Link to={`/api/things/${thing._id}`}>View</Link>
            </p>
            )}
        </div>
    )
}

export default ThingList