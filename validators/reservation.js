const Joi = require('joi');

const reservationSchema = Joi.object().keys({
    reservation: {
        startDate: Joi.date().required(),
        endDate: Joi.date().greater(Joi.ref('startDate')).required(),
        pricePerDay: Joi.number().precision(2).required(),
        carId: Joi.number().integer().min(1).required()
    }
})

module.exports = reservationSchema;