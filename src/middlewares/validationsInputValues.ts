import schemas from './schemas';
import statusCodes from '../utils/statusCodes';

const userNameMessage = '"username" is required';
const passwordMessage = '"password" is required';

const validateLoginData = (loginData: undefined) => {
  const { error } = schemas.addUserPassword.validate(loginData);
  if (error) { 
    switch (error.message) {
      case userNameMessage:
        return { type: statusCodes.BAD_REQUEST, message: userNameMessage };
      case passwordMessage:
        return { type: statusCodes.BAD_REQUEST, message: passwordMessage };
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

const validateUsername = (userData: undefined) => {
  const { error } = schemas.addUser.validate(userData);
  if (error) { 
    switch (error.message) {
      case userNameMessage:
        return { type: statusCodes.BAD_REQUEST, message: userNameMessage };
      case '"username" must be a string':
        return { type: statusCodes.UNPROCESSABLE_CONTENT, message: '"username" must be a string' };
      case '"username" length must be at least 3 characters long':
        return { 
          type: statusCodes.UNPROCESSABLE_CONTENT, 
          message: '"username" length must be at least 3 characters long' };
      default:
        break;
    }
  }
  
  return { type: null, message: '' };
};

const validateVocation = (userData: undefined) => {
  const { error } = schemas.addUser.validate(userData);
  if (error) { 
    switch (error.message) {
      case '"vocation" is required':
        return { type: statusCodes.BAD_REQUEST, message: '"vocation" is required' };
      case '"vocation" must be a string':
        return { type: statusCodes.UNPROCESSABLE_CONTENT, message: '"vocation" must be a string' };
      case '"vocation" length must be at least 3 characters long':
        return { 
          type: statusCodes.UNPROCESSABLE_CONTENT, 
          message: '"vocation" length must be at least 3 characters long' };

      default:
        break;
    }
  }
  
  return { type: null, message: '' };
};

const validatePassword = (userData: undefined) => {
  const { error } = schemas.addUser.validate(userData);
  if (error) { 
    switch (error.message) {
      case passwordMessage:
        return { type: statusCodes.BAD_REQUEST, message: passwordMessage };
      case '"password" must be a string':
        return { type: statusCodes.UNPROCESSABLE_CONTENT, message: '"password" must be a string' };
      case '"password" length must be at least 8 characters long':
        return { 
          type: statusCodes.UNPROCESSABLE_CONTENT, 
          message: '"password" length must be at least 8 characters long' };

      default:
        break;
    }
  }
  
  return { type: null, message: '' };
};

const validateLevel = (userData: undefined) => {
  const { error } = schemas.addUser.validate(userData);
  if (error) { 
    switch (error.message) {
      case '"level" is required':
        return { type: statusCodes.BAD_REQUEST, message: '"level" is required' };
      case '"level" must be a number':
        return { type: statusCodes.UNPROCESSABLE_CONTENT, message: '"level" must be a number' };
      case '"level" must be greater than or equal to 1':
        return { 
          type: statusCodes.UNPROCESSABLE_CONTENT, 
          message: '"level" must be greater than or equal to 1' };

      default:
        break;
    }
  }
  
  return { type: null, message: '' };
};

const auxValidateUser = (userData: undefined) => {
  const auxValidateUsername = validateUsername(userData);
  const auxValidateVocation = validateVocation(userData);
  const auxValidatePassword = validatePassword(userData);
  const auxValidateLevel = validateLevel(userData);
  if (auxValidateUsername.type !== null) {
    return auxValidateUsername;
  }
  if (auxValidateVocation.type !== null) {
    return auxValidateVocation;
  }
  if (auxValidatePassword.type !== null) {
    return auxValidatePassword;
  }
  if (auxValidateLevel.type !== null) {
    return auxValidateLevel;
  }
  return { type: null, message: '' };
};
export default {
  validateLoginData,
  validateNameData,
  validateAmountData,
  validateUsername,
  validateVocation,
  validatePassword,
  validateLevel,
  auxValidateUser,
};
