console.log("this is js tut");

function greet(name , greettext ="hello , bro") {
    console.log( greettext + " , " +name );
    console.log(name + " is a good boy");
}
let name = 'Zahid';
let name2 = 'Harry';
let name3 = 'jaideep';
let name4 = 'vipin';
let name5 = 'aman';
let greettext1 = 'Good Morning';

greet(name , greettext1);
greet(name2 , greettext1);
greet(name3 , greettext1);
greet(name4 , greettext1);
greet(name5);

// console.log(name + " is a bad boy");
// console.log(name2 + " is a bad boy");
// console.log(name3 + " is a bad boy");
// console.log(name4 + " is a bad boy");
// console.log(name5 + " is a bad boy");


function sum(a , b , c) {
    let d = a + b + c ;
    return d;
    console.log("hello");    // this line is unprintable 
}                                        // after using 'return' function is stopped 
let returnVal = sum(15 , 2 , 3 );
console.log(returnVal);