const Joi = require('joi');

const reservationSchema = Joi.object().keys({
    startDate: Joi.date().required(),
    endDate: Joi.date().greater(Joi.ref('startDate')).required(),
    userId: Joi.number().integer().min(1).required(),
    carId: Joi.number().integer().min(1).required()
})

module.exports = reservationSchema;