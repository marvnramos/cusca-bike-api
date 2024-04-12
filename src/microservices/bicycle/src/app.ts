import dbConnection from './config/db';
import  express, {Router}  from 'express';
import BicycleRoutes  from './routes/bicycle-routes'
import cors from 'cors';

import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.disable('x-powered-by');

app.use("/api/v1/bicycle", BicycleRoutes);

let PORT: number =  parseInt(process.env.PORT!);

dbConnection();
app.listen(PORT, () => {
    console.log(` 🚲 | Server runing on: http://localhost:${PORT}`);
});