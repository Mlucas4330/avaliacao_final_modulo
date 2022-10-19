import express from 'express';
import cors from 'cors';
import { router } from './routes/Routes';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', router);

app.listen(3001, () => {
    console.log("Running...");
});
