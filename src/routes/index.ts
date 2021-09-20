
import { Router } from 'express';
import productRouter from './productRouter';

const routes = Router();

routes.use('/products', productRouter);

export default routes;