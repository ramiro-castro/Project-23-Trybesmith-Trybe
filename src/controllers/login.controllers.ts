import { Request, Response } from 'express';
import LoginServices from '../services/login.services';
import createJWT from '../utils/createJWT';
import statusCodes from '../utils/statusCodes';
import validationsInputValues from '../middlewares/validationsInputValues';

const LoginControllers = {

  async login(req: Request, res: Response) {
    try {
      const loginData = req.body;
      const checkLoginData = validationsInputValues.validateLoginData(loginData);
      if (checkLoginData.type) {
        res.status(checkLoginData.type).json({ message: checkLoginData.message });
        return;
      }
      const dataUser = await LoginServices.login(loginData);
      if (dataUser === undefined) {
        res.status(statusCodes.UNAUTHORIZED).json({ message: 'Username or password invalid' });
        return;
      }
      const { id, username } = dataUser;
      const token = await createJWT({ id, username });
      //   console.log(token);
      res.status(statusCodes.OK).json({ token });
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  },
};

export default LoginControllers;