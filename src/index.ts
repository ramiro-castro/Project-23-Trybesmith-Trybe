import app from './app';

const PORT = 3001;
// const { PORT } = process.env;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
