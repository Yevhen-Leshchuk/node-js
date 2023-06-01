const Joi = require('joi');

module.exports = {
  addPostValidation: (req, res, next) => {
    const schema = Joi.object({
      topic: Joi.string().alphanum().min(3).max(30).required(),
      description: Joi.string().alphanum().min(10).max(400).required(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({status: validationResult.error.details});
    }

    next();
  },

  addPatchValidation: (req, res, next) => {
    const schema = Joi.object({
      topic: Joi.string().alphanum().min(3).max(30).optional(),
      description: Joi.string().alphanum().min(10).max(400).optional(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({status: validationResult.error.details});
    }

    next();
  },
};
