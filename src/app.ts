import express from 'express';
import 'express-async-errors';
import { errorHandler } from './middlewares/error-handler';
import router from './routes/routes';

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello')
})

app.use(router);

app.use(errorHandler);


if (true || false) {

}

export default app;


