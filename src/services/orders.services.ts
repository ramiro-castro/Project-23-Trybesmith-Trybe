// import { OrderInterface } from '../interfaces/all.interfaces';
import OrdersModels from '../models/orders.models';

const OrdersServices = {
  async getAll() {
    const data = await OrdersModels.getAll();
    return data;
  },
};

export default OrdersServices; 