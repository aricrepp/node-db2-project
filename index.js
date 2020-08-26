const express = require('express');
const db = require('./data/config');
const carRouter = require('./cars/cars-router');

const server = express();
const port = 4000;
server.use(express.json());
server.use(carRouter);
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
