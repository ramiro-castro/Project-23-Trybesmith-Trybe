import { Request, Response } from 'express';
import LoginServices from '../services/login.services';
import createJWT from '../utils/createJWT';
import statusCodes from '../utils/statusCodes';
import validationsInputValues from '../middlewares/validationsInputValues';

const jwtSecret = process.env.JWT_SECRET || 'secret';

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
      const { username } = dataUser;
      const token = await createJWT(username, jwtSecret);
      res.status(statusCodes.OK).json({ token });
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  },
};

export default LoginControllers;