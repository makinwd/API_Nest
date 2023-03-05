import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create_movie.dto';
import { UpdateMovieDto } from './dto/update_movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAll(): Movie[];
    search(searchingYear: string): string;
    getOne(movieId: number): Movie;
    create(movieData: CreateMovieDto): void;
    remove(movieId: number): void;
    patch(movieId: number, updateData: UpdateMovieDto): void;
}
