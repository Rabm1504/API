import { Router } from 'express';

import MoviesService from './../services/movie.service';
import validatorHandler from './../middlewares/validator.handler';
import { createMovieSchema, updateMovieSchema, getMovieSchema } from './../schemas/movie.schema';

const router = Router();
const service = new MoviesService();

router.get('/', async (req, res) => {
  const movies = await movie.find();
  res.json(movies);
});

router.get('/filter', (req, res) => {
  res.send('I am a filter');
});

router.get('/:id',
  validatorHandler(getMovieSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const movie = await service.findOne(id);
      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createMovieSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newMovie = await service.create(body);
    res.status(201).json(newMovie);
  }
);

router.patch('/:id',
  validatorHandler(getMovieSchema, 'params'),
  validatorHandler(updateMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const movie = await service.update(id, body);
      res.json(movie);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

export default router;
