// Prob 1 ============
console.log(hello);                                   
var hello = 'world';                                 

/*  
    var hello
    console.log(hello) => logs undefined because it hello is not defined yet when called
*/

// Prob 2 ============
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/*
    var needle => globally set to 'haystack'
    function 'test()' is called but can't run as it hasn't been defined yet
    test function runs 
        needle is locally set to be 'magnet'
        console logs => 'magnet'
*/

// Prob 3 ============
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.="support method from-rainbow">log(brendan);

/* 
    var brendan is set globally to 'super cool'
    funtion print() is defined
        sets brendan to 'only okay'
        console.logs brendan to => "only okay"
    console.= is nothing and will break
*/

// Prob 4 ============
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/* 
    var food is globally set => chicken
    function eat() is defined
        sets 'food' to 'half-chicken
        console.log(food) => 'half-chicken'
        sets food to "gone"
    console log => "food"
    eat is called but hasn't been defined
*/

// Prob 5 ============
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/*
    mean is called -> not a function
    cannot set mean to a type of function
*/

// Prob 6 ============
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
    console log genre; genre is undefined
    var genre is hoiseted, globally set to "disco"
    function rewind(); is hoised 
        sets genre to 'rock'
        console log genre => 'rock'
        sets genre to 'r&b'
        console log genre => 'r&b'
    rewind() is called 
        => 'rock'
        => 'r&b'
    console.log genre => 'disco'
*/

// Prob 7 ============
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*
    dojo is set to "san jose"
    console.log dojo => "san jose"
    learn() is hoisted
        sets dojo to "seattle"
        console.log => "seattle"
        sets dojo to "burbank"
        console.log dojo => "burbank"
    learn()
        => seattle
        => burbank
    console.log dojo => "san jose"
*/


// Prob 8 ============
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/* 
    dojo is set to const of empty {} which cannot be changed, therefore =>
        if/elif statements are broken 
*/