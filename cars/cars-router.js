const express = require('express');
const knex = require('knex');
const db = require('../data/config');

const router = express.Router();

router.get('/cars', async (req, res, next) => {
  try {
    res.status(201).json(await db('car'));
  } catch (error) {
    next(error);
  }
});

router.get('/cars/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db('car').where({ id }).first();
    res.json(car);
  } catch (error) {
    next(error);
  }
});

router.post('/cars', async (req, res, next) => {
  console.log(req.body);
  try {
    console.log(req.body);

    const [id] = await db('car').insert(req.body);
    const user = await db('car').where({ id }).first();

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

// router.post('/cars', async (req, res, next) => {
//   console.log(req.body);
// });

module.exports = router;
