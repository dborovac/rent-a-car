const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const models = require('../models');
const validator = require('../middleware/validator');

router.post('/', validator('cardetails'), async function (req, res) {
    models.CarDetails.create({
        doors: req.body.doors,
        fuel: req.body.fuel,
        transmission: req.body.transmission
    })
    .then(car => res.status(StatusCodes.CREATED).json(car))
    .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.get('/', async function (req, res) {
    const cardetails = await models.CarDetails.findAll();
    res.status(StatusCodes.OK).json({data: cardetails});
});

router.get('/:carDetailsId', async function (req, res) {
    const carDetails = await models.CarDetails.findByPk(req.params.carDetailsId)
        .then(carDetails => {
            if (!carDetails) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'Car details not found.' });
            } else res.status(StatusCodes.OK).json(carDetails);
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.put('/:carDetailsId', validator('cardetails'), async function (req, res) {
    await models.CarDetails.findByPk(req.params.carDetailsId)
        .then(carDetails => {
            if (!carDetails) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'Car details not found.' }).end();
            } else {
                carDetails.update({
                    doors: req.body.doors,
                    fuel: req.body.fuel,
                    transmission: req.body.transmission
                })
                .then(() => res.status(StatusCodes.NO_CONTENT).end())
                .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err))
            }
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.delete('/:carDetailsId', async function (req, res) {
    await models.CarDetails.destroy({
        where: {
            id: req.params.carDetailsId
        }
    }).then(carDetailsId => {
        if (!carDetailsId) {
            res.status(StatusCodes.NOT_FOUND).send({ message: 'Car details not found.' });
        } else res.status(StatusCodes.NO_CONTENT).end();
    }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

module.exports = router;