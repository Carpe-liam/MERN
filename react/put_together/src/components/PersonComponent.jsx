import React, { Component } from 'react'

class PersonComponent extends Component { 

    constructor(props) {
        super(props)
        this.state = {
            age: 15
        }
    }

    birthday = () => {
        this.setState({ age: ++this.state.age})
    }

    render(){
        const{ firstName, lastName, age, hairColor} = this.props
        return(
            <div id="cards">
                <fieldset>
                <div>
                    <h1> {firstName} {lastName} </h1>
                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor} </p>
                    <div>
                        <button onClick={this.birthday}> It's {firstName}'s Birthday</button>
                    </div>
                </div> 
                </fieldset>
            </div>
        );
    }
}

export default PersonComponent