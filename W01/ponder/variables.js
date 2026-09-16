// This is a comment

/* this is a comment */

let age = 25;

console.log(age);

const name = "Brother Warner";

//name = "Dr Java"

const username = "billybob"
//scope = where you can reference a variable by name

if(age == 22){
    // a new scope
    console.log(username);
    
    let favoriteColor = "blue";
}

//console.log(favoriteColor)


//Changing the DOM

document.querySelector("h1").style.color = "blue"

const PI = 3.14;
let radius = 3;

const one = 1;
const two = '2';

let course = "CSE131"; //global scope

if(true) {
    let student = "John";
    console.log(course); //Works just fine, course is global
    console.log(student); //Works just fine, it's being accessed within the block
}

console.log(course); //Works fine, course is global
console.log(student); //doesnot work, can't access a block variable outside the block
