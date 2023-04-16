import express from 'express';

import productsRoutes from './routes/products.routes';
import userRoutes from './routes/user.routes';
import loginRoutes from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoutes);

export default app;
