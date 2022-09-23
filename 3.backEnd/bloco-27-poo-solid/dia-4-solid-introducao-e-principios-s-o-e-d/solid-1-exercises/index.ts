import express from 'express';
import plantsRouter from './plantsRouter';
// import { StatusCodes } from 'http-status-codes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(plantsRouter);

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default app;
