const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs")
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static' , express.static('static'));    // For searving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');      // set the tamplate engine as pug
app.set('views' , path.join(__dirname , 'views'));    //set views directory { for Template }

// ENDPOINTS
app.get('/' , (req , res )=>{
    const con = "This is the para 's  content i want this in a long paragraph i this this long is enough."
    const para = {'title' : 'PUBG the Game' , content : con }
    res.status(200).render('index.pug'  , para );
})

app.post('/' , (req , res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    contact = req.body.contact
    address = req.body.address
    more = req.body.more

    fs.writeFileSync( 'Output.txt',`Name is ${name} ,${age} Years Old ,  Contact Number is ${contact} , Residence From : ${address} , More About Him/Her Self : ${more} `)

    // console.log(req.body);
    const para ={ 'message' : 'Your Form Has been submitted Succsessfully'}
    res.status(200).render('index.pug' , para);
})


// START SERVER
app.listen( port , ()=>{
    console.log(`The application is running on post ${port} `);
});















// app.get('/demo', (req, res) => {
//     res.render('demo', { title: 'Hey my name is Zahid ', message: 'Hello there! I am Available 24X7' })
//   })      // pug demo end point

// app.get("/" , (req , res )=> {
//     res.status(200).send("This is my  HOME PAGE  of first express with Zahid");
// });

// app.get("/contacts" , (req , res )=> {
//     res.status(200).send("This is my CONTACTS PAGE first express with Zahid");
// });

// app.get("/about" , (req , res )=> {
//     res.status(200).send("This is my ABOUT PAGE first express with Zahid");
// });

// // app.post("/about" , (req , res )=> {
// //     res.send("This is my POST REQUEST WITH >> ABOUT PAGE first express with Zahid");
// // });
// app.get("/this" , (req , res )=> {
//     res.status(404).send("THis Page NOT FOUND");
// });