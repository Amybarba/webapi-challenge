// get express 
const express = require('express');

// get actionModel router 
const actmodRouter = require('./routers/actmod-router.js');

// get projectModel router 
const projmodRouter = require('./routers/projmod-router.js');

// create server object 
const server = express();

// attach server to json via express 
server.use(express.json());

// attach server to actions 
server.use('/api/actions', actmodRouter);

// attach server to projects 
server.use('/api/projects', projmodRouter);

// get from the root 
server.get('/', (request, response) => {
    response.status(420)
    response.send("Hello from Amys Node and Express Challenge Project")
});

// send the server out 
module.exports = server;



