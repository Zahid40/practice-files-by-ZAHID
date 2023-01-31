// This is Node Server Handels -websockts connection
const io = require('socket.io')(8000);

const users = {};

io.on('connection' , socket =>{
    socket.on('new-user-join' , name =>{
        console.log("New user" , name);
        users[socket.id] = name;
        socket.broadcast.emit('user-join' , name);
    });

    socket.on('send' , message =>{
        socket.broadcast.emit('recive' , {message:message , name:users[socket.id]})
    });
})