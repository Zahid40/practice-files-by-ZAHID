const socket = io('http://localhost:8000');

const form = document.getElementById('msgcont');
const msg = document.getElementById('msg');
const container = document.querySelector(".container");

const name = prompt("Enter Your Name To Join");
socket.emit('new-user-join' , name );