import { Router } from 'express';
import MoviesRouter from './movies.router.js';
import genresRouter from './genres.router.js';
import usersRouter from './users.router.js';

function routerApi(app) {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/movies', MoviesRouter);
  router.use('/genres', genresRouter);
  router.use('/users', usersRouter);
}

export default routerApi;
