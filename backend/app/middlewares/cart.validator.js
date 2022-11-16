const joi = require("joi");

const validation = joi.object({
  mealId: joi.string().alphanum().min(3).max(100).trim(true).required(),
  quantity: joi.number().integer().min(1).max(10),
  price: joi.number().integer().min(100).max(30000),
  total: joi.number().integer().min(100).max(300000),
});

const cartValidation = async (req, res, next) => {
  const payload = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    total: req.body.total,
  };
  console.log(payload);

  const { error } = validation.validate(req.body);
  if (error) {
    res.status(406);
    console.log(error);
    return res.json(`Error in Cart Data: ${error.message}`);
  } else {
    next();
  }
};
module.exports = cartValidation;
