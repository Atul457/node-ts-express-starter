import type * as Express from 'express';
import { AppEnum } from '../enums/app.enum';

export const addPrefixMiddleware = (app: Express.Application) => {
    app.use(AppEnum.API_PREFIX, (_, __, next) => {
        next();
    });
};
