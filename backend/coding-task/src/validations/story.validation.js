const Joi = require('joi');

const createStory = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
    }),
};

module.exports = {
    createStory,
};