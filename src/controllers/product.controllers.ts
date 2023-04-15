import { Request, Response } from 'express';
import ProductServices from '../services/product.services';
import statusCodes from '../utils/statusCodes';

class ProductControllers {
  productServices: ProductServices;

  constructor(productServices = new ProductServices()) {
    this.productServices = productServices;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const product = req.body;
      const data = await this.productServices.create(product);
      res.status(statusCodes.CREATED).json(data);
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const data = await this.productServices.getAll();
      res.status(statusCodes.OK).json(data);
    } catch (error) {
      res.status(statusCodes.SERVER_ERROR).json({ error });
    }
  }
}

export default ProductControllers;
