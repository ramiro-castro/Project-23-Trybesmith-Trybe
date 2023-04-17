import Joi from 'joi';

const addUserPassword = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const addProduct = Joi.object({
  name: Joi.string().required().min(3),
  amount: Joi.string().required().min(3),
});

const addUser = Joi.object({
  username: Joi.string().required().min(3),
  vocation: Joi.string().required().min(3),
  level: Joi.number().required().min(1),
  password: Joi.string().required().min(8),
});

const addProductsIds = Joi.object({
  productsId: Joi.array().items(Joi.number()).required(),
});

export default {
  addUserPassword,
  addProduct,
  addUser,
  addProductsIds,
};