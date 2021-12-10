const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const models = require('../models');
const validator = require('../middleware/validator');

router.use(validator('car'));

router.post('/', async function (req, res) {
    models.Car.create({manufacturer: req.body.car.manufacturer, model: req.body.car.model, year: req.body.car.year})
        .then(car => res.status(StatusCodes.CREATED).json(car))
        .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.get('/', async function (req, res) {
    const cars = await models.Car.findAll();
    res.status(StatusCodes.OK).json({data: cars});
});

router.get('/:carId', async function (req, res) {
    const car = await models.Car.findByPk(req.params.carId)
        .then(car => {
            if (!car) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'Car not found.' });
            } else res.status(StatusCodes.OK).json(car);
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.put('/:carId', async function (req, res) {
    await models.Car.findByPk(req.params.carId)
        .then(car => {
            if (!car) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'Car not found.' }).end();
            } else {
                car.update({ manufacturer: req.body.car.manufacturer, model: req.body.car.model, year: req.body.car.year })
                .then(() => res.status(StatusCodes.NO_CONTENT).end())
                .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err))
            }
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.delete('/:carId', async function (req, res) {
    await models.Car.destroy({
        where: {
            id: req.params.carId
        }
    }).then(car => {
        if (!car) {
            res.status(StatusCodes.NOT_FOUND).send({ message: 'Car not found.' });
        } else res.status(StatusCodes.NO_CONTENT).end();
    }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

module.exports = router;