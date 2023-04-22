import { ResultSetHeader } from 'mysql2/promise';
import { ProductInterface, UpdateProductInterface } from '../interfaces/all.interfaces';
import connection from './connection';

const ProductModels = {

  async create(product: ProductInterface): Promise<ProductInterface> {
    const { name, amount } = product;
    const result = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  },

  async getAll(): Promise<ProductInterface[]> {
    const data = await connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    const [rows] = data;
    return rows as ProductInterface[];
  },

  async getById(id: number): Promise<ProductInterface | null> {
    const [data] = await connection.execute(
      'SELECT name, amount FROM Trybesmith.Products WHERE id=?;',
      [id],
    );
    const [product] = data as ProductInterface[];
    return product || null;
  },

  async updateProduct(product: object) {
    const { orderId, id } = product as UpdateProductInterface;
    
    await connection.execute(
      'Update Trybesmith.products SET order_id = ? WHERE id = ?',
      [orderId, id],
    );
  },
};

export default ProductModels;