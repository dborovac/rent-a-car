const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const models = require('../models');
const validator = require('../middleware/validator');
const auth = require('../middleware/auth');

router.post('/', [auth.authToken, auth.isModOrAdmin, validator('car')], async function (req, res) {
    models.Car.create({
        manufacturer: req.body.car.manufacturer,
        model: req.body.car.model,
        year: req.body.car.year,
        detailsId: req.body.car.detailsId,
        pricePerDay: req.body.car.pricePerDay,
    })
    .then(car => res.status(StatusCodes.CREATED).json(car))
    .catch(err => {
        if (err.name == 'SequelizeForeignKeyConstraintError') {
            res.status(StatusCodes.BAD_REQUEST).send({ message: 'Details with given ID do not exist.' });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    });
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

router.put('/:carId', [auth.authToken, auth.isModOrAdmin, validator('car')], async function (req, res) {
    await models.Car.findByPk(req.params.carId)
        .then(car => {
            if (!car) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'Car not found.' }).end();
            } else {
                car.update({
                    manufacturer: req.body.car.manufacturer,
                    model: req.body.car.model,
                    year: req.body.car.year,
                    detailsId: req.body.car.detailsId,
                    image: req.body.car.image,
                    pricePerDay: req.body.car.pricePerDay,
                })
                .then(() => res.status(StatusCodes.NO_CONTENT).end())
                .catch(err => {
                    if (err.name == 'SequelizeForeignKeyConstraintError') {
                        res.status(StatusCodes.BAD_REQUEST).send({ message: 'Details with given ID do not exist.' });
                    } else {
                        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
                    }
                });
            }
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.delete('/:carId', [auth.authToken, auth.isModOrAdmin], async function (req, res) {
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