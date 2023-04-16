import { Pool, ResultSetHeader } from 'mysql2/promise';
import { UserConfidentialInterface } from '../interfaces/all.interfaces';

class UserModels {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: UserConfidentialInterface): Promise<UserConfidentialInterface> {
    const { username, vocation, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

//   async getAll(): Promise<ProductInterface[]> {
//     const data = await this.connection.execute(
//       'SELECT * FROM Trybesmith.products',
//     );
//     const [rows] = data;
//     return rows as ProductInterface[];
//   }
}

export default UserModels;