const express = require('express');
const knex = require('knex');
const db = require('../data/config');

const router = express.Router();

router.get('/cars', async (req, res, next) => {
  try {
    res.status(201).json(await db('car-dealer'));
  } catch (error) {
    next(error);
  }
});

router.get('/cars/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db('car-dealer').where({ id }).first();
    res.json(car);
  } catch (error) {
    next(error);
  }
});

router.post('/cars', async (req, res, next) => {
  try {
    const [id] = await db('car-dealer').insert(req.body);
    const newCar = await db('car-dealer').where({ id }).first();
    res.status(201).json(newCar);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
