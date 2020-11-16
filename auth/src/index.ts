import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-users';
import { signinRouter } from './routes/siginin';
import { signoutRouter } from './routes/siginout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

//handle 404 erros
app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
