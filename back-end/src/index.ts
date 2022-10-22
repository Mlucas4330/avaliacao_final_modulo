import express from 'express';
import cors from 'cors';
import { UserRoute } from './routes/User';
import { TaskRoute } from './routes/Tasks';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', UserRoute);
app.use('/task', TaskRoute);

app.listen(3505, () => {
    console.log("Running...");
});
