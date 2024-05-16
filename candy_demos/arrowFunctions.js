//standard function definition

function sayHello(greeting){
    return greeting;
}

let greeting = sayHello("hello");

console.log(greeting);


//FUNCTION EXPRESSIONS EXMPLE

let sulatation = function(aThing){
    console.log(aThing);
}

sulatation("boogie")


//ARROW FUNCTIONS

let arrowFunc = (someThing) => {
console.log(someThing);
}

arrowFunc("aloha")