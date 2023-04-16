import { UserConfidentialInterface, LoginInterface } from '../interfaces/all.interfaces';
import LoginModels from '../models/login.models';

const LoginServices = {
  async login(loginData: LoginInterface): Promise<UserConfidentialInterface> {
    const { username, password } = loginData;
    const tryLogin = await LoginModels.login(username, password);
    return tryLogin as UserConfidentialInterface;
  },
};

export default LoginServices; 