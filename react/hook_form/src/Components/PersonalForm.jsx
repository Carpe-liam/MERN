import React, { useState } from 'react'

const PersonalForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("");
    
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");
    
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("");
    
    const [confirmPass, setConfirmPass] = useState("")
    const [passwordConfirmError, setPasswordConfirmError] = useState("");


    const createUser = (e) => {
        e.preventDefault()
        const newUser = { firstName, lastName, email, password, confirmPass }
        console.log("New User Made", newUser)
    }

    // ===== VALIDATE FIRST NAME
        const handleFirst = (e) => {
            setFirstName(e.target.value)
            if(e.target.value.length < 1) {
                setFirstNameError("First name is required!");
            } else if(e.target.value.length < 3) {
                setFirstNameError("First name must be 3 characters or longer!");
            } else {
                setFirstNameError("")
            }
        }

    // ===== VALIDATE LAST NAME
        const handleLast = (e) => {
            setLastName(e.target.value)
            if(e.target.value.length < 1) {
                setLastNameError("Last name is required!");
            } else if(e.target.value.length < 3) {
                setLastNameError("Last name must be 3 characters or longer!");
            } else {
                setLastNameError("")
            }
        }

    // ===== VALIDATE EMAIL
        const handleEmail = (e) => {
            setEmail(e.target.value)
            if(e.target.value.length < 1) {
                setEmailError("Email is required!");
            } else if(e.target.value.length < 3) {
                setEmailError("Email must be 3 characters or longer!");
            } else {
                setEmailError("")
            }
        }

        // ===== VALIDATE PASSWORD
        const handlePassword = (e) => {
            setPassword(e.target.value)
            if(e.target.value.length < 1) {
                setPasswordError("Password is required!");
            } else if(e.target.value.length < 5) {
                setPasswordError("Password must be 5 characters or longer!");
            } else {
                setPasswordError("")
            }
        }

        // ===== VALIDATE PASSWORD & CONFIRM PASS MATCH
        const handleConfirm = (e) => {
            setConfirmPass(e.target.value)
            if(e.target.value.length < 1) {
                setPasswordConfirmError("Password is required!");
            } else if(e.target.value != password) {
                setPasswordConfirmError("Passwords do not match!");
            } else {
                setPasswordConfirmError("")
            }
        }




    return (
        <div>
            <form onSubmit={ createUser }>
                <div class="div">
                    <label>First Name:</label>
                    <input type="text" onChange={ handleFirst } />
                    {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                    }
                </div>
                <div class="div">
                    <label>Last Name:</label>
                    <input type="text" onChange={ handleLast } />
                    {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                    }
                </div>
                <div class="div">
                    <label>Email:</label>
                    <input type="text" onChange={ handleEmail } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }
                </div>
                <div class="div">
                    <label>Password:</label>
                    <input type="password" onChange={ handlePassword } />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }
                </div>
                <div class="div">
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ handleConfirm } />
                    {
                    passwordConfirmError ?
                    <p style={{color:'red'}}>{ passwordConfirmError }</p> :
                    ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First Name:          {firstName} </p>
                <p>Last Name:           {lastName}</p>
                <p>Email:               {email}</p>
                <p>Password:            {password}</p>
                <p>Confirm Password:    {confirmPass}</p>
            </div>
        </div>
    );
}

export default PersonalForm;