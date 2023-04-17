// import { ProductInterface } from '../interfaces/all.interfaces';
import OrdersModels from '../models/orders.models';
import ProductModels from '../models/product.models';

const OrdersServices = {
  async getAll() {
    const data = await OrdersModels.getAll();
    return data;
  },

  async create(userId: number, productsIds: number[]) {
    const objeto = await OrdersModels.create(userId);
    // console.log(objeto);

    const { id: orderId } = objeto;

    productsIds.map((id) => ProductModels.updateProduct({ orderId, id }));
  },
  
};

export default OrdersServices; 