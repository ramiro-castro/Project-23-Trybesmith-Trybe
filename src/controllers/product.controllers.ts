import { Request, Response } from 'express';
import validationsInputValues from '../middlewares/validationsInputValues';
import ProductServices from '../services/product.services';
import statusCodes from '../utils/statusCodes';

const ProductControllers = {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const product = req.body;

      const checkName = validationsInputValues.validateNameData(product);
      if (checkName.type) {
        res.status(checkName.type).json({ message: checkName.message });
        return;
      }

      const checkAmount = validationsInputValues.validateAmountData(product);
      if (checkAmount.type) {
        res.status(checkAmount.type).json({ message: checkAmount.message });
        return;
      }

      const data = await ProductServices.create(product);
      res.status(statusCodes.CREATED).json(data);
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  },

  async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const data = await ProductServices.getAll();
      res.status(statusCodes.OK).json(data);
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  },
};

export default ProductControllers;
