import { Movie } from './entities/movie.entity';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: number): Movie;
    remove(id: number): void;
    create(movieData: any): void;
    patch(id: number, updateData: any): void;
}
