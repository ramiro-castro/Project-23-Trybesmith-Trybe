import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { OrderInterface } from '../interfaces/all.interfaces';
import connection from './connection';

const OrdersModels = {
  async getAll(): Promise<OrderInterface[]> {
    const data = await connection.execute<RowDataPacket[]>(
      `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
       FROM Trybesmith.orders AS o
       INNER join Trybesmith.products AS p
       ON o.id = p.order_id
       GROUP BY o.id`,
    );
    console.log(data);
    const [rows] = data;
    return rows as OrderInterface[];
    // return data as OrderInterface[];
  },

  async create(userId: number) {
    const [result] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?);',
      [userId],
    );
    console.log(result);
    const { insertId: id } = result;
    return { id, userId };
  },

};

export default OrdersModels;