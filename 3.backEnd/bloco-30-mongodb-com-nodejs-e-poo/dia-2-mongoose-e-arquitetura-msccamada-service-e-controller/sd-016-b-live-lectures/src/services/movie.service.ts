import NotFoundError from "../errors/notfound.error";
import IMovieModel from "../models/interfaces/movie.model";
import { IMovie } from "../models/schemas/movie.schema";
import IMovieService from "./interfaces/movie.service";

export default class MovieService implements IMovieService {

    private _movieModel: IMovieModel;

    constructor(movieModel: IMovieModel) {
        this._movieModel = movieModel;
    }
    
    async create(movie: IMovie): Promise<IMovie> {
        return await this._movieModel.create(movie);
    }

    async findAll(): Promise<IMovie[]> {
        return await this._movieModel.findAll();
    }

    async findById(id: string): Promise<IMovie> {
        const movie = await this._movieModel.findById(id);
        if(!movie) throw new NotFoundError("movie not found");
        return movie;
    }

    async updateById(id: string, movie: IMovie): Promise<IMovie> {
        const movieUpdated = await this._movieModel.update(id, movie);
        if(!movieUpdated) throw new NotFoundError("movie not found");
        return movieUpdated;
    }

    async deleteById(id: string): Promise<void> {
        const movie = await this._movieModel.findById(id);
        if(!movie) throw new NotFoundError("movie not found");
        await this._movieModel.deleteById(id);
    }

}