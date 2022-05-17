import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';

import UserRoutes from './routes/user.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(UserRoutes); // coloque essa linha antes do middleware de erro!

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});