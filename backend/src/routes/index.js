import { Router } from 'express';
import userRouter from './user.routes';
import loanRouter from './loan.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/loans', loanRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
