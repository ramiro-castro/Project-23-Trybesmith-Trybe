import Joi from 'joi';

const addUserPassword = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const addProduct = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
});

export default {
  addUserPassword,
  addProduct,
};