import Jwt from 'jsonwebtoken';

const jwtConfig: Jwt.SignOptions = {
  expiresIn: '12h',
  algorithm: 'HS256',
};

const createJWT = async (payload: unknown, jwtSecret: string): Promise<string> => {
  const token = Jwt.sign({ data: payload }, jwtSecret, jwtConfig);

  return token;
};

export default createJWT;