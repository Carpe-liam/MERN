import React, { Component } from 'react'

class PersonComponent extends Component { 

    constructor(props) {
        super(props)
    }

    birthday = () => {
        this.props.age+=1
    }

    render(){
        const{ firstName, lastName, age, hairColor} = this.props
        return(
            <div id="cards">
                <div>
                    <h1> {firstName} {lastName} </h1>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor} </p>
                    <div>
                        <button onClick={this.birthday}> It's {firstName}'s Birthday</button>
                    </div>
                </div> 
            </div>
        );
    }
}

export default PersonComponent