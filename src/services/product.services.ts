import connection from '../models/connection';
import { ProductInterface } from '../interfaces/all.interfaces';
import ProductModels from '../models/product.models';

class ProductServices {
  model: ProductModels;

  constructor() {
    this.model = new ProductModels(connection);
  }

  async getAll(): Promise<ProductInterface[]> {
    const data = await this.model.getAll();
    return data;
  }
  
  async create(product: ProductInterface): Promise<ProductInterface> {
    const data = await this.model.create(product);
    return data;
  }
}

export default ProductServices;