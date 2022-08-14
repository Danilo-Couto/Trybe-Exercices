import { IMovie } from "../../models/schemas/movie.schema";

export default interface IMovieService {
    create(movie: IMovie): Promise<IMovie>;
    findAll(): Promise<IMovie[]>;
    findById(id: string): Promise<IMovie>;
    updateById(id: string, movie: IMovie): Promise<IMovie>
    deleteById(id: string): Promise<void>;
}