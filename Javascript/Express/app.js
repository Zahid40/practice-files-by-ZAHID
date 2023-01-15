const express = require("express");

const app = express();
const port = 80;

app.get("/" , (req , res )=> {
    res.status(200).send("This is my  HOME PAGE  of first express with Zahid");
});

app.get("/contacts" , (req , res )=> {
    res.status(200).send("This is my CONTACTS PAGE first express with Zahid");
});

app.get("/about" , (req , res )=> {
    res.status(200).send("This is my ABOUT PAGE first express with Zahid");
});

// app.post("/about" , (req , res )=> {
//     res.send("This is my POST REQUEST WITH >> ABOUT PAGE first express with Zahid");
// });
app.get("/this" , (req , res )=> {
    res.status(404).send("THis Page NOT FOUND");
});

app.listen( port , ()=>{
    console.log(`The application is running on post ${port} `);
});