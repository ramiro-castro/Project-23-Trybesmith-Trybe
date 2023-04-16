import { RowDataPacket } from 'mysql2/promise';
import { UserConfidentialInterface } from '../interfaces/all.interfaces';
import connection from './connection';

const LoginModels = {
  async login(username: string, password: string): Promise<UserConfidentialInterface> {
    const result = await connection.execute<RowDataPacket[]>(
      `SELECT * FROM Trybesmith.users
       WHERE username = ? AND password = ?`,
      [username, password],
    );
    const [[rows]] = result;
    return rows as UserConfidentialInterface;
  },

};

export default LoginModels;