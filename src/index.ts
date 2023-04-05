// import createError from 'http-errors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Express } from 'express';

dotenv.config();

import { router } from './routes';

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

app.use('/building', router);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
