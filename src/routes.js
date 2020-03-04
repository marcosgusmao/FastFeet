import { Router } from 'express';

import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/recipients', RecipientsController.store);

routes.use(authMiddleware);

routes.put('/recipients/:id', RecipientsController.update);

export default routes;
