const express = require('express');

const server = express();

const middleware = require('./config/middleware');

// import routers
const {
  cohortRouter,
} = require('./routes');

middleware(server); // third-party middleware

server.use(express.json());

// routers
server.use("/api/cohorts", cohortRouter);

server.get('/', (req, res) => {
  res.send(`<p>Database Project - Migrations</p>`)
});

module.exports = server;
