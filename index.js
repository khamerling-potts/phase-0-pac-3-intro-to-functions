// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
sayHelloToLiz();

function sayHelloToSamip() {
    console.log("Hello, Samip!");
}
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
  

function doSomething(thing) {
    console.log(thing);
    return thing;
}
  
doSomething("doing stuff"); // passing the argument 'anything' into our function
console.log(doSomething('doing more stuff'));

function sayHelloTo(firstName){
    console.log(`Hello, ${firstName}`);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

//console.log(firstName);

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
}

say("Goodbye", "Julio");
say("Julio", "hello");
console.log(say("Hello", "Liz"));
console.log(say('Howdy', 'partner'));

function add(x, y){
    return x+y;
}
console.log(add(1, 2));
const sum = add(1, 2);
const message = `The sum of your numbers is: ${sum}.`;
console.log(message);

//writing a function of my own
function findSeason(month){
    switch(month){
        case "December":
        case "January":
        case "February":
            return "Winter";
        case "March":
        case "April":
        case "May":
            return "Spring";
        case "June":
        case "July":
        case "August":
            return "Summer";
        case "September":
        case "October":
        case "November":
            return "Fall";
    }
}

console.log(findSeason("October"));
console.log(findSeason("April"));

