import { Model } from 'mongoose';
import GenericModel from './generic.model';
import IMovieModel from './interfaces/movie.model';
import { IMovie } from './schemas/movie.schema';

export default class MovieModel extends GenericModel<IMovie> implements IMovieModel {
    constructor(modelMongoose: Model<IMovie>) {
        super(modelMongoose);
    }

    // public async findByYear(year: number) {
    //     return await this._modelMongoose.findOne({ year });
    // }
}
