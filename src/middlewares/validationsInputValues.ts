import schemas from './schemas';
import statusCodes from '../utils/statusCodes';

const validateLoginData = (loginData: undefined) => {
  const { error } = schemas.addUserPassword.validate(loginData);
  if (error) { 
    switch (error.message) {
      case '"username" is required':
        return { type: statusCodes.BAD_REQUEST, message: '"username" is required' };
      case '"password" is required':
        return { type: statusCodes.BAD_REQUEST, message: '"password" is required' };
      default:
        break;
    }
  }
  
  return { type: null, message: '' };
};

const validateNameData = (productData: undefined) => {
  const { error } = schemas.addProduct.validate(productData);
  if (error) { 
    switch (error.message) {
      case '"name" is required':
        return { type: statusCodes.BAD_REQUEST, message: '"name" is required' };
      case '"name" must be a string':
        return { type: statusCodes.UNPROCESSABLE_CONTENT, message: '"name" must be a string' };
      case '"name" length must be at least 3 characters long':
        return { 
          type: statusCodes.UNPROCESSABLE_CONTENT, 
          message: '"name" length must be at least 3 characters long' };
      default:
        break;
    }
  }
  
  return { type: null, message: '' };
};

const validateAmountData = (productData: undefined) => {
  const { error } = schemas.addProduct.validate(productData);
  if (error) { 
    switch (error.message) {
      case '"amount" is required':
        return { type: statusCodes.BAD_REQUEST, message: '"amount" is required' };
      case '"amount" must be a string':
        return { type: statusCodes.UNPROCESSABLE_CONTENT, message: '"amount" must be a string' };
      case '"amount" length must be at least 3 characters long':
        return { 
          type: statusCodes.UNPROCESSABLE_CONTENT, 
          message: '"amount" length must be at least 3 characters long' };

      default:
        break;
    }
  }
  
  return { type: null, message: '' };
};

export default {
  validateLoginData,
  validateNameData,
  validateAmountData,
};
