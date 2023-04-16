import { Request, Response } from 'express';
import UserServices from '../services/user.services';
import createJWT from '../utils/createJWT';
import statusCodes from '../utils/statusCodes';

const jwtSecret = process.env.JWT_SECRET || 'secret';

class UserControllers {
  userServices: UserServices;

  constructor(userServices = new UserServices()) {
    this.userServices = userServices;
    // this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body;
      const dataUser = await this.userServices.create(user);
      const { id, username } = dataUser;
      const token = createJWT({ id, username }, jwtSecret);
      res.status(statusCodes.CREATED).json({ token });
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  }

//   async getAll(_req: Request, res: Response): Promise<void> {
//     try {
//       const data = await this.productServices.getAll();
//       res.status(statusCodes.OK).json(data);
//     } catch (error) {
//       res.status(statusCodes.SERVER_ERROR).json({ error });
//     }
//   }
}

export default UserControllers;