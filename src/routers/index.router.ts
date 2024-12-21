import express from 'express';

import healthCheckRouter from './health.router';

const router = express.Router();

router.use('/', healthCheckRouter);

export default router;
