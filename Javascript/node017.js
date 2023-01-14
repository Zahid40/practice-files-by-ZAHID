// console.log("Hello Node js");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
      <title>This is 2023</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
      <style>
          
          body {
              background-color: rgb(5, 5, 5);
              font-family: Poiret One ;
          }
  
          .container {
              background-color: white;
              border-radius: 2.5rem;
              border: none;
              padding-bottom: 7rem;
              margin: 1rem;
              text-align: center;
              height: 100%;
              box-shadow: inset 4px -4px 10px black , inset -4px -4px 10px black;
          }
  
          h1 {
              background-color: rgb(0, 0, 255);
              color: white;
              border-top-left-radius: 2.5rem;
              border-top-right-radius: 2.5rem;
              padding: 3rem 0rem;
              font-weight: 600;
              font-size: 4rem;
              text-shadow: 2px 2px 10px rgb(71, 0, 0);
              box-shadow: inset 4px 4px 10px black , inset -4px 4px 10px black;
          }
          #time {
              display: flex;
              justify-content: center;
          }
          #time , #calender {
              text-align: center;
              font-size: 5rem;
              font-weight: 100;
              text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.699);
  
          }
          #calender {
              font-size: 2.5rem;
              font-weight: 500;
              margin:5rem 0rem ;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <h1>Current Time</h1>
          <div id="calender">
          </div>
          <span id="time"></span>
      </div>
      <script>
          const now = new Date();
          console.log(now);
  
          // inside date function put miliseconds fron initial date
          const initaldt = new Date(0);
          console.log(initaldt);
  
          let newDate = new Date("2029-09-08")
          console.log(newDate);

          //Clock Func
          setInterval(clock, 1000);
          function clock() {
              
              datefor = new Date();
              const monthbhi = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
  
              time.innerHTML = datefor.getHours() + ":" + datefor.getMinutes() + ":" + datefor.getSeconds();
              calender.innerHTML = datefor.getDate() + " " + monthbhi[datefor.getMonth()] + " " + datefor.getFullYear();
  
          }
      </script>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});