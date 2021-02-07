import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes/routes';

const app: Application = express();
//Settings
app.set('PORT', process.env.PORT || 3000);
//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/api', routes);
export default app;