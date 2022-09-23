import { Router } from 'express';
import MovieController from '../controllers/movie.controller';
import MovieModel from '../models/movie.model';
import { movieMongooseModel } from '../models/schemas/movie.schema';
import MovieService from '../services/movie.service';

const movieRoutes = Router();

const movieModel = new MovieModel(movieMongooseModel);
const movieService = new MovieService(movieModel);
const movieController = new MovieController(movieService);

movieRoutes.get('/movies', (req, res, next) => movieController.findAll(req, res, next));
movieRoutes.post('/movies', (req, res, next) => movieController.create(req, res, next));
//movieRoutes.put('/movies/:id', (req, res) => {});
//movieRoutes.delete('/movies/:id', (req, res) => {});

export default movieRoutes;