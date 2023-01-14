const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html');
const contact = fs.readFileSync('contact.html');
const about = fs.readFileSync('about.html');
const servises = fs.readFileSync('servises.html');

const server = http.createServer((req , res)=> {
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-type' , 'text/html');
    if( url == '/'){
        res.end(home);
    }
    else if( url == '/home'){
        res.end(home);
    }
    else if( url == '/about'){
        res.end(about);
    }
    else if( url == '/contact'){
        res.end(contact);
    }
    else if( url == '/servises'){
        res.end(servises);
    }
    else{
        res.statusCode = 404;
        res.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Page Not Found</title>
            <style>
                body {
                    background-color: black;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                }
                
                .about {
                    background-color: rgb(255, 255, 255);
                    margin: 6rem 2rem;
                    padding: 2rem;
                    border-radius: 1rem;
                }
                h3 {
                    text-align: center;
                    font-size: 4rem;
                }
                
            </style>
        </head>
        <body>
            <div class="about">
                <h3>404 Error </h3>
            </div>
        </body>
        </html>`);
    }
});

server.listen(port , hostname , ()=> {
    console.log(`server running at http://${hostname}:${port}/`);
});
