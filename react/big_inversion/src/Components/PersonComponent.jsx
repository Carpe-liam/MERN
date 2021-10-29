import React from 'react';

const personStyle = {
    border: 'black solid 1px',
    margin: '15px',
    width: '250px',
    padding: '10px',
    background: 'orange'
}


const PersonCard = props => {
    return(
        <div style={ personStyle }>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;