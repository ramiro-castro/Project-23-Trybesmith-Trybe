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

export default {
  validateLoginData,
};
