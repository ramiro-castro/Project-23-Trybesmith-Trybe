import { Request, Response } from 'express';
// import Jwt from 'jsonwebtoken';
import { UserJwt } from '../interfaces/all.interfaces';
import validationsInputValues from '../middlewares/validationsInputValues';
import OrdersServices from '../services/orders.services';
import statusCodes from '../utils/statusCodes';

const OrdersControllers = {

  async getAll(req: Request, res: Response) {
    try {
      const dataOrders = await OrdersServices.getAll();

      res.status(statusCodes.OK).json(dataOrders);
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  },

  async create(req: Request, res: Response) {
    const { productsIds } = req.body;

    const token = req.headers.authorization as string;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = await validationsInputValues.decryptToken(token);
    console.log(decoded);
    
    if (decoded === null) return res.status(401).json({ message: 'Invalid token' });

    const checkProductsIds = validationsInputValues.validateProductsIds(productsIds);
    //   console.log(checkProductsIds); 
    if (checkProductsIds.type) {
      res.status(checkProductsIds.type).json({ message: checkProductsIds.message });
      return;
    }

    const { payload } = decoded as unknown as UserJwt;
    const { id } = payload;
    // console.log(id);
    const message = { userId: id, productsIds };
    //   console.log(message);
    await OrdersServices.create(Number(id), productsIds);
    res.status(201).json(message);
  },
  
};

export default OrdersControllers;