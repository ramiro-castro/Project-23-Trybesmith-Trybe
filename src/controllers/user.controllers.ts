import { Request, Response } from 'express';
import validationsInputValues from '../middlewares/validationsInputValues';
import UserServices from '../services/user.services';
import createJWT from '../utils/createJWT';
import statusCodes from '../utils/statusCodes';

class UserControllers {
  userServices: UserServices;
  // no user.controllers mantive o constructor e o metodo bind, porem nos outros removi, ja que estava apresentando um erro com a conexao do banco de dados.

  constructor(userServices = new UserServices()) {
    this.userServices = userServices;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body;

      const checkUser = validationsInputValues.auxValidateUser(user);
      if (checkUser.type) {
        res.status(checkUser.type).json({ message: checkUser.message });
        return;
      }

      const dataUser = await this.userServices.create(user);
      const { id, username } = dataUser;
      const token = await createJWT({ id, username });
      res.status(statusCodes.CREATED).json({ token });
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  }
}

export default UserControllers;