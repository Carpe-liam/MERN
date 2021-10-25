// PROB 1 ===============
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

/*
    randomCar will be cars[0]
    ',' skips 1 index value [0]->[1]
    ,otherRandomCar will be cars[1]
*/

// PROB 2 ===============
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name);
console.log(otherName);

/*
    const employee is created
    const otherName is created using employee[name] key:value pair
    console.log(name)
        -> won't work [breaks]
    console.log(otherName)
        -> 'Elon'
*/


// PROB 3 ===============
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

/*
    const person created
    const password created
    const hashedPassword created from person[password]
        >>> doesn't exist so is undefined
    console.log passowrd
        -> 12345
    console.log hpass
        -> undefined
*/

// PROB 4 ===============
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

/*
    const array =numbers created\
    const ',first' is set from numbers
        >>> =2
    const ',,,second' is set from numbers
        >>> =5
    const ',,,,,,,,third' is set from numbers
        >>> =2
    consolelog bool of first==second
        >>> false
    console.log bool of first==third
        >>> true
*/

// PROB 5 ===============
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

/*
    const lastTest created
    consts key of lastTest
        >> 'value'
    const secondKey of lastTest
        >> array values
    const ',willthiswork] of secondKey
        >> =5
    console.key
        >> 'value'
    console.secondkey
        >> 1, 5, 1, 8, 3, 3
    console.secondkey[0]
        >> 1
    console.willthiswork
        >> 5
*/