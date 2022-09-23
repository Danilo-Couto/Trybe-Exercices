import { IMovie } from "../schemas/movie.schema";
import IGenericModel from "./generic.model";

export default interface IMovieModel extends IGenericModel<IMovie> {
    // findByYear(year: number): Promise<IMovie | null>;
}