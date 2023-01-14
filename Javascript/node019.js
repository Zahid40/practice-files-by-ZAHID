// Synchronous or Blocking
// ---Line by line Execution 

// Asynchronous or Non-blocking
//---line by line exicution not guarented
//---callbacks will fire

const fs = require("fs")
fs.readFile("zzz.txt" , "utf-8" , (err , data)=>{
    console.log( err ,data);
});
console.log("This is the Message");