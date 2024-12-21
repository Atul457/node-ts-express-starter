import express, { Request, Response } from 'express';
import { utils } from '../utils/index.util';

const healthCheckRouter = express.Router();

healthCheckRouter.get('/', (_: Request, res: Response) => {
    res.json(
        utils.response.generator({
            status: true,
            message: 'Hello, TypeScript with Express!',
        })
    );
});

export default healthCheckRouter;
