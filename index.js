
//https://observablehq.com/@d3/gallery
//https://observablehq.com/@d3/learn-d3
//http://localhost:3000/
//Rodar: node index.js


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});