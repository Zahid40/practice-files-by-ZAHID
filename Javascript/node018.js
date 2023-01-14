//fs Module { File-System Module}
const fs = require("fs")

// This is to read files from directory
let text = fs.readFileSync("zzz.txt" , "utf-8");
console.log(text);

//this is how to REPLACING content from a file
text = text.replace("file" , "text file ");
console.log( "Creating new file for -->" + text);

//this is how to create new file in directory
fs.writeFileSync("yyy.txt" , text);