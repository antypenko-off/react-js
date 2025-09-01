
import type { FC } from "react";
import type { IMovie } from "../models/IMovie";
import MoviesListCard from "./MoviesListCardComponent.tsx";


type MovieListProps = {
    movies: IMovie[];
};

const MovieList: FC<MovieListProps> = ({ movies }) => (
    <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 ">
        {movies.map(m => <MoviesListCard key={m.id} movie={m} />)}
    </section>

);

export default MovieList;
