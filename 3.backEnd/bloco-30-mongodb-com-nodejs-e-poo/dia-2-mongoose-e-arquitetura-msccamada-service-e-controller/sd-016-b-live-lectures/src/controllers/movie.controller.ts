import { Request, Response, NextFunction } from 'express';
import IMovieService from '../services/interfaces/movie.service';
import IMovieController from './interfaces/movie.controller';

export default class MovieController implements IMovieController{

    private _movieService: IMovieService;

    constructor(movieService: IMovieService) {
        this._movieService = movieService;
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { title, year, classification, starring, director, genres, length } = req.body;
            const movieCreated = await this._movieService.create({ 
                title, 
                year, 
                classification, 
                starring, 
                director, 
                genres, 
                length 
            });
            return res.status(201).json(movieCreated);
        } catch (error) {
            next(error);
        }
    } 

    public async updateById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = req.params;
            const { title, year, classification, starring, director, genres, length } = req.body;
            const movieUpdated = await this._movieService.updateById(id, { 
                title, 
                year, 
                classification, 
                starring, 
                director, 
                genres, 
                length 
            });
            return res.status(200).json(movieUpdated);
        } catch (error) {
            next(error);
        }
    } 

    public async deleteById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = req.params;
            const movie = await this._movieService.deleteById(id);
            return res.status(200).json(movie);
        } catch (error) {
            next(error);
        }
    } 

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const movies = await this._movieService.findAll();
            return res.status(200).json(movies);
        } catch (error) {
            next(error);
        }
    } 

    public async findById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = req.params;
            const movie = await this._movieService.findById(id);
            return res.status(200).json(movie);
        } catch (error) {
            next(error);
        }
    } 

}