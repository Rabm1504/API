import { string, number, object } from 'joi';

const id = string().uuid();
const name = string();
const time = number();
const image = string().uri();
const trailer = string ();
const country = string ();
const year = number();
const description = string ();
const language = string ();
const rating = number();
const genre = string ();

const createProductSchema = object({
  name: name.required(),
  image: image.required(),
  trailer: trailer.required(),
  country: country.required(),
  year: year.required(),
  description: description.required(),
  language: language.required(),
  rating: rating.required(),
  genre: genre.required(),
  time: time.required(),
});

const updateProductSchema = object({
  name: name,
  image: image,
  trailer: trailer,
  country: country,
  year: year,
  description: description,
  language: language,
  rating: rating,
  genre: genre,
  time:time
});

const getProductSchema = object({
  id: id.required(),
});

export default { createProductSchema, updateProductSchema, getProductSchema }

