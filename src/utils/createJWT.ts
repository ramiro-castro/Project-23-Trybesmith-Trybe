import Jwt from 'jsonwebtoken';

const jwtConfig: Jwt.SignOptions = {
  expiresIn: '12h',
  algorithm: 'HS256',
};
const jwtSecret = process.env.JWT_SECRET || 'secret';
const createJWT = async (payload: object) => Jwt.sign({ payload }, jwtSecret, jwtConfig);

export default createJWT;