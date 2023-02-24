import { Router } from 'express';

const router = Router();

router.get('/:genreId/movies/:movieId', (req, res) => {
  const { genreId, movieId } = req.params;
  res.json({
    genreId,
    movieId,
  });
})

export default router;
