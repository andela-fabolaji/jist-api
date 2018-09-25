import express, { Router } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { globalErrorHandler } from './utils';
import routerFn from './router';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// route
app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Jist Api 1.0'
  });
});

app.use('/api', routerFn(Router()));
app.use(globalErrorHandler);

export default app;