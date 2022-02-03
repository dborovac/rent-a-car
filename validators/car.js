const Joi = require('joi');

const carSchema = Joi.object().keys({
    car: {
        manufacturer: Joi.string().max(30).required(),
        model: Joi.string().max(50).required(),
        year: Joi.number().integer().min(1900).required(),
        detailsId: Joi.number().integer().min(1).required(),
        image: Joi.string()
    }
})

module.exports = carSchema;