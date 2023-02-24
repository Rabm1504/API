import { datatype } from 'faker';
import { notFound, conflict } from '@hapi/boom';

class MoviesService {
  constructor(){
    this.movies = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.movies.push({
        id: datatype.uuid(),
        name: movieName(),
        trailer: movieTrailer(),
        time: movieTime(),
        country: movieCountry(),
        year: movieYear(),
        description: movieDescription(),
        language: movieLanguage(),
        rating: movieRating(),
        genre: movieGenre(),
        image: movieImage(),
      });
    }
  }

  async create(data) {
    const newMovie = {
      id: datatype.uuid(),
      ...data
    }
    this.movies.push(newMovie);
    return newMovie;
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.movies);
      }, );
    })
  }

  async findOne(id) {
    const movie = this.movies.find(item => item.id === id);
    if (!movie) {
      throw notFound('movie not found');
    }
    if (movie.isBlock) {
      throw conflict('movie is block');
    }
    return movie;
  }

  async update(id, changes) {
    const index = this.movies.findIndex(item => item.id === id);
    if (index === -1) {
      throw notFound('movie not found');
    }
    const movie = this.movies[index];
    this.movies[index] = {
      ...movie,
      ...changes
    };
    return this.movies[index];
  }

  async delete(id) {
    const index = this.movies.findIndex(item => item.id === id);
    if (index === -1) {
      throw notFound('movie not found');
    }
    this.movies.splice(index, 1);
    return { id };
  }

}

export default MoviesService;
