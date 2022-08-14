import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import movieRoutes from './routes/movie.routes';

export default class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.config()
    }

    private config() {
        this.express.use(express.json());
        this.express.use(movieRoutes);
        this.express.use(errorMiddleware);
    }

    public start(port: number | string = 3001) {
        this.express.listen(port, () => console.log(`server running at: http://localhost:${port}`));
    }
}