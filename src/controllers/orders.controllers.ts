import { Request, Response } from 'express';
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
};

export default OrdersControllers;