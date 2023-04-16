import Joi from 'joi';

const addUserPassword = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default {
  addUserPassword,
};