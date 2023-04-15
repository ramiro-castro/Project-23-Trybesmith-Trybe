import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ProductInterface } from '../interfaces/product.interface';

class ProductModels {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(product: ProductInterface): Promise<ProductInterface> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }

  async getAll(): Promise<ProductInterface[]> {
    const data = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    const [rows] = data;
    return rows as ProductInterface[];
  }
}

export default ProductModels;