const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');
const models = require('../models');
const validator = require('../middleware/validator');
const auth = require('../middleware/auth');

router.post('/', [auth.authToken, auth.isModOrAdminOrLoggedIn, validator('reservation')], async function (req, res) {
    models.Reservation.create({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        carId: req.body.carId,
        userId: req.body.userId
    }).then(reservation => res.status(StatusCodes.CREATED).json(reservation))
    .catch(err => {
        if (err.name == 'SequelizeForeignKeyConstraintError') {
            res.status(StatusCodes.BAD_REQUEST).send({ message: 'Car with given ID does not exist.' });
        } else {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
        }
    });
});

router.get('/', async function (req, res) {
    const reservations = await models.Reservation.findAll();
    res.status(StatusCodes.OK).json({data: reservations});
});

router.get('/:reservationId', async function (req, res) {
    await models.Reservation.findByPk(req.params.reservationId)
        .then(reservation => {
            if (!reservation) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'Reservation not found.' });
            } else res.status(StatusCodes.OK).json(reservation);
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.put('/:reservationId', [auth.authToken, auth.isModOrAdminOrLoggedIn, validator('reservation')], async function (req, res) {
    await models.Reservation.findByPk(req.params.reservationId)
        .then(reservation => {
            if (!reservation) {
                res.status(StatusCodes.NOT_FOUND).send({ message: 'Reservation not found.' });
            } else {
                reservation.update({
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                    carId: req.body.carId,
                    userId: req.body.userId
                }).then(() => res.status(StatusCodes.NO_CONTENT).end())
                .catch(err => {
                    if (err.name == 'SequelizeForeignKeyConstraintError') {
                        res.status(StatusCodes.BAD_REQUEST).send({ message: 'Car with given ID does not exist.' });
                    } else {
                        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
                    }
                });
            }
        }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

router.delete('/:reservationId', [auth.authToken, auth.isModOrAdminOrLoggedIn], async function (req, res) {
    await models.Reservation.destroy({
        where: {
            id: req.params.reservationId
        }
    }).then(reservation => {
        if (!reservation) {
            res.status(StatusCodes.NOT_FOUND).send({ message: 'Reservation not found.' });
        } else res.status(StatusCodes.NO_CONTENT).end();
    }).catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));
});

module.exports = router;
