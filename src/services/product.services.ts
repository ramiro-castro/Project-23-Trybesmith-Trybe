import { ProductInterface } from '../interfaces/all.interfaces';
import ProductModels from '../models/product.models';

const ProductServices = {
  async getAll(): Promise<ProductInterface[]> {
    const data = await ProductModels.getAll();
    return data;
  },
  
  async create(product: ProductInterface): Promise<ProductInterface> {
    const data = await ProductModels.create(product);
    return data;
  },

};

export default ProductServices;