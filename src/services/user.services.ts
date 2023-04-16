// import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import { UserConfidentialInterface } from '../interfaces/all.interfaces';
import UserModels from '../models/user.models';

class UserServices {
  model: UserModels;

  constructor() {
    this.model = new UserModels(connection);
  }
  
  async create(user: UserConfidentialInterface): Promise<UserConfidentialInterface> {
    const data = await this.model.create(user);
    return data;
  }
}

export default UserServices;