import express from 'express';
import { AppEnum } from './enums/app.enum';
import router from './routers/index.router';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get('/', (_, res) => {
    res.redirect(AppEnum.API_PREFIX);
});

app.use(AppEnum.API_PREFIX, router);

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
