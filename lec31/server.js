import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port: 8080});

// wss.on('connection', function connection(ws) {
//   console.log('A new client connected!');
//   ws.send("welcome!!")
//   setInterval(() => {
//     ws.send('Hello! Message From Server!!');
//   }, 1000);

// });  
    

// wss.on('connection', function connection(ws) {
//   console.log('A new client connected!');
//   ws.send("welcome!!")
//     ws.on('message', function message(data) {
//     console.log(`Received message => ${data}`);
//     if(data.toString() === 'ping'){
//         ws.send("pong");
//     }
//   });
// });



// let allsockets = [];
// wss.on('connection', function connection(ws) {
//   console.log('A new client connected!');
//   allsockets.push(ws);
//   ws.on('message', function message(data) {
//     allsockets.forEach((client) => {
//         client.send(data.toString());
//     })
//   });
// });