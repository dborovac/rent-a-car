const Joi = require('joi');

const reservationSchema = Joi.object().keys({
    reservation: {

    }
})

module.exports = reservationSchema;